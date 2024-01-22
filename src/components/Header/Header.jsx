import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BsTabletLandscape } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";

const cx = classNames.bind(styles);

const Header = () => {
    const [IsDark, setIsDark] = useState(false)
    return(
        <div className={cx('header')}>
            <h1><img src="/imgs/logo-b.webp" alt="" /></h1>

            {/* 디바이스 모드 */}
            <div className={cx('device')}>
                <CiMobile2 size={25} />
                <BsTabletLandscape size={20} />
                <SlScreenDesktop size={23} />
            </div>

            {/* 다크모드 토글 */}
            <div className={cx('theme')} onClick={() => setIsDark(!IsDark)}>
                {IsDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
			</div>
        </div>
    );
}

export default Header