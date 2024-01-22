import styles from './Side.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Side = () => {
    return(
        <nav className={cx('side')}>Side</nav>
    );
}

export default Side