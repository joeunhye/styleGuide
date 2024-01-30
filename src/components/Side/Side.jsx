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
            <NavLink to='/form'>Form</NavLink>
            <NavLink to='/checkboxradio'>CheckBox & Radio</NavLink>
            <NavLink to='/switch'>Switch</NavLink>
        </nav>
    );
}

export default Side