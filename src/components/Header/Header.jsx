import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BsTabletLandscape } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { useDarkMode } from '../../context/DarkModeContext';
import { Link, useLocation } from 'react-router-dom';
import { useDeviceMode } from '../../context/DeviceModeContext';

const cx = classNames.bind(styles);

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const {DeviceModeset, handleDeviceMode} = useDeviceMode();
    const pathName = useLocation().pathname;

    const deviceStyle = cx(DeviceModeset);
 
    return(
        <header className={cx('header', deviceStyle)}>
            <h1>
                <Link to='/'>{darkMode ? <img src="/imgs/logo-w.webp" alt="" /> : <img src="/imgs/logo-b.webp" alt="" />}</Link>
            </h1>

            {/* 디바이스 모드 */}
            {pathName !== '/' && (
                <div className={cx('device', {dark : darkMode}, deviceStyle)}>
                    <button data-device='mobile' onClick={(e) => handleDeviceMode(e)}><CiMobile2 size={25} /></button>
                    <button data-device='tablet' onClick={(e) => handleDeviceMode(e)}><BsTabletLandscape size={20} /></button>
                    <button data-device='desktop' onClick={(e) => handleDeviceMode(e)}><SlScreenDesktop size={23} /></button>
                </div>
            )}
            

            {/* 다크모드 토글 */}
            <button className={cx('theme')} onClick={toggleDarkMode}>
                {darkMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
			</button>
        </header>
    );
}

export default Header