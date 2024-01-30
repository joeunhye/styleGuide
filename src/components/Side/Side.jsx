import { NavLink } from 'react-router-dom';
import styles from './Side.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Side = () => {
    return(
        <nav className={cx('side')}>
            <NavLink to='/'>📌 Read Me</NavLink>
            <NavLink to='/buttons'>Buttons</NavLink>
            <NavLink to='/text'>Text</NavLink>
            <NavLink to='/input'>Input</NavLink>
        </nav>
    );
}

export default Side