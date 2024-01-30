import ContTab from '../../components/ContTab/ContTab';
import ContWrap from '../../components/ContWrap/ContWrap';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = () => {
    return(
        <ContWrap title="Input">
            <ContTab />
        </ContWrap>
    );
}

export default Input