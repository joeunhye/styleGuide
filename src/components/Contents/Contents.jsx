import styles from './Contents.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
    if(content === "preview") {
        return <div className={cx('preview')}>preview</div>
    }
    return(
        <div className={cx('code')}>code</div>
    );
}

export default Contents