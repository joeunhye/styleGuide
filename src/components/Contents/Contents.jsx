import { useLocation } from 'react-router-dom';
import { useDeviceMode } from '../../context/DeviceModeContext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './Contents.module.scss';
import classNames from 'classnames/bind';
import { GoCopy } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from 'react';

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
    const {DeviceModeset} = useDeviceMode();
    const location = useLocation();
    const [Copy, setCopy] = useState(false);
    
    const iframeName = location.pathname.split('/')[1];

    const deviceStyle = cx(DeviceModeset);

    const codeString = '(num) => num + 1';

    const iframeCont = () => {
        return {
            __html: 
            `<iframe src="/html/${iframeName}.html" width="100%" height="600px" frameborder=0 framespacing=0 />`
        }
    }

    if(content === "preview") {
        return <div className={cx('preview', deviceStyle)}>
            <div dangerouslySetInnerHTML={iframeCont()} />
        </div>
    }
    return(
        <div className={cx('code', deviceStyle)}>
            <div className={cx('code-title')}>
                <p>HTML</p>

                {!Copy ? 
                    (<button className={cx('btn-copy')} onClick={() => {
                        navigator.clipboard.writeText(codeString);
                        setCopy(true);
                        setTimeout(() => {
                            setCopy(false)
                        }, 3000)
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
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
}

export default Contents

// https://www.youtube.com/watch?app=desktop&v=XxGMuoje1g0&ab_channel=CodeAProgram
// https://github.com/rajinwonderland/react-code-blocks?tab=readme-ov-file#supported-themes
// https://www.mozzlog.com/blog/react-syntax-highlighter-tutorial