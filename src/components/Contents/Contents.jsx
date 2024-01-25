import { useLocation } from 'react-router-dom';
import { useDeviceMode } from '../../context/DeviceModeContext';
import styles from './Contents.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
    const {DeviceModeset} = useDeviceMode();
    const location = useLocation()
    const iframeName = location.pathname.split('/')[1]

    const deviceStyle = cx(DeviceModeset);

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
        <div className={cx('code', deviceStyle)}>code</div>
    );
}

export default Contents

// https://www.youtube.com/watch?app=desktop&v=XxGMuoje1g0&ab_channel=CodeAProgram
// https://github.com/rajinwonderland/react-code-blocks?tab=readme-ov-file#supported-themes