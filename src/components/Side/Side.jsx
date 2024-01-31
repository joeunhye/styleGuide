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
            <NavLink to='/tab'>Tab</NavLink>
            <NavLink to='/table'>Table</NavLink>
            <NavLink to='/pagination'>Pagination</NavLink>
            <NavLink to='/popup'>Popup</NavLink>
            <NavLink to='/accordion'>Accordion</NavLink>
            <NavLink to='/dropdown'>Dropdown</NavLink>
            <NavLink to='/zoom'>Zoom</NavLink>
            <NavLink to='/topBtn'>Top Button</NavLink>
            <NavLink to='/thubnailList'>Thubnail List</NavLink>
            <NavLink to='/listStyle'>List Style</NavLink>
        </nav>
    );
}

export default Side