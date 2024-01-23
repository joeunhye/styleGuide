import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Side from '../Side/Side';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Layout = () => {
    return(
        <>
            <Header />
            <div className={cx('layout')}>
                <Side />
                <Outlet />
            </div>
        </>
    );
}

export default Layout