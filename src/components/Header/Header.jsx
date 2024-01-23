import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BsTabletLandscape } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { useDarkMode } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return(
        <div className={cx('header')}>
            <h1>
                <Link to='/'>{darkMode ? <img src="/imgs/logo-w.webp" alt="" /> : <img src="/imgs/logo-b.webp" alt="" />}</Link>
            </h1>

            {/* 디바이스 모드 */}
            <div className={cx('device', {dark : darkMode})}>
                <button><CiMobile2 size={25} /></button>
                <button><BsTabletLandscape size={20} /></button>
                <button><SlScreenDesktop size={23} /></button>
            </div>

            {/* 다크모드 토글 */}
            <button className={cx('theme')} onClick={toggleDarkMode}>
                {darkMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
			</button>
        </div>
    );
}

export default Header

// https://seo0yoon.tistory.com/219
// https://grownfresh.tistory.com/263
// https://ejko0911.medium.com/react-tab-menu-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-1d1dfe2219d2