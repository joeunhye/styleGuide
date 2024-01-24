import { useDeviceMode } from '../../context/DeviceModeContext';
import styles from './Contents.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
    const {DeviceModeset} = useDeviceMode();

    const deviceStyle = cx(DeviceModeset);

    if(content === "preview") {
        return <div className={cx('preview', deviceStyle)}>preview</div>
    }
    return(
        <div className={cx('code', deviceStyle)}>code</div>
    );
}

export default Contents

// https://www.youtube.com/watch?app=desktop&v=XxGMuoje1g0&ab_channel=CodeAProgram
// https://github.com/rajinwonderland/react-code-blocks?tab=readme-ov-file#supported-themes