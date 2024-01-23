import styles from './ContWrap.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ContWrap = ({title, children}) => {
    return(
        <main className={cx('contWrap')}>
            <h2>{title}</h2>
            {children}
        </main>
    );
}

export default ContWrap