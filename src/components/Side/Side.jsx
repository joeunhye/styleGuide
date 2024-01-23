import { NavLink } from 'react-router-dom';
import styles from './Side.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Side = () => {
    return(
        <nav className={cx('side')}>
            <NavLink to='/readme'>Read Me</NavLink>
            <NavLink to='/buttons'>Buttons</NavLink>
        </nav>
    );
}

export default Side