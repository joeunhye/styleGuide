import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Side from '../Side/Side';
import classNames from 'classnames/bind';
import TopBtn from '../TopBtn/TopBtn';

const cx = classNames.bind(styles);

const Layout = () => {
    return(
        <>
            <Header />
            <div className={cx('layout')}>
                <Side />
                <Outlet />
            </div>
            <TopBtn />
        </>
    );
}

export default Layout