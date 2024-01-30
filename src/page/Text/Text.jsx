import ContTab from '../../components/ContTab/ContTab';
import ContWrap from '../../components/ContWrap/ContWrap';
import styles from './Text.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Text = () => {
    return(
        <ContWrap title='Text'>
            <ContTab />
        </ContWrap>
    );
}

export default Text