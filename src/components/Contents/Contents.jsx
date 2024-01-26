import { useLocation } from 'react-router-dom';
import { useDeviceMode } from '../../context/DeviceModeContext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './Contents.module.scss';
import classNames from 'classnames/bind';
import { GoCopy } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
    const {DeviceModeset} = useDeviceMode();
    const deviceStyle = cx(DeviceModeset);
    const location = useLocation();
    const [Copy, setCopy] = useState(false);
    const frameObj = useRef(null);
    const iframeName = location.pathname.split('/')[1];

    const [CodeHtml, setCodeHtml] = useState('');
    
    // const codeString = '(num) => num + 1';

    useEffect(()=>{ 
        const iframeHtml = setTimeout(() => {
            return frameObj.current.contentWindow.document.body.innerHTML
        }, 1000);
        // setCodeHtml(iframeHtml)
    }, [CodeHtml])

    // const getIframeHtml = () => {
    //     const iframeHtml = frameObj.current.contentWindow.document.body.innerHTML;
    //     setCodeHtml(iframeHtml)
    // }

    console.log(CodeHtml)

    const iframeCont = () => {
        const iframeUrl = `/html/${iframeName}.html`;
        return {
            __html: 
            `<iframe src="${iframeUrl}" width="100%" height="600px" frameborder=0 framespacing=0 />`
        }
    }

    if(content === "preview") {
        return <div className={cx('preview', deviceStyle)}>
            {/* <div dangerouslySetInnerHTML={iframeCont()} /> */}
            <iframe src={`/html/${iframeName}.html`} width="100%" height="600px" ref={frameObj} />
        </div>
    }
    return(
        <div className={cx('code', deviceStyle)}>
            <div className={cx('code-title')}>
                <p>HTML</p>

                {!Copy ? 
                    (<button className={cx('btn-copy')} onClick={() => {
                        navigator.clipboard.writeText(CodeHtml);
                        setCopy(true);
                        setTimeout(() => {
                            setCopy(false)
                        }, 1000)
                    }}>
                        <GoCopy size={20} />
                    </button>)
                    : 
                    (<button className={cx('btn-copy')} >
                        <IoMdCheckmark size={20} color='#159eca' />
                    </button>)
                }
                
            </div> 
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{margin: '0px', padding: '25px', background: '#33373f', borderRadius: '0 0 10px 10px'}} wrapLongLines={true}>
                {CodeHtml}
            </SyntaxHighlighter>
        </div>
    );
}

export default Contents

// https://www.youtube.com/watch?app=desktop&v=XxGMuoje1g0&ab_channel=CodeAProgram
// https://github.com/rajinwonderland/react-code-blocks?tab=readme-ov-file#supported-themes
// https://www.mozzlog.com/blog/react-syntax-highlighter-tutorial