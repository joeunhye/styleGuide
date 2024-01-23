import ContTab from '../../components/ContTab/ContTab';
import ContWrap from '../../components/ContWrap/ContWrap';
import styles from './Buttons.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Buttons = () => {
    return(
        <ContWrap title='Buttons'>
            <p>Buttons 페이지 입니다.</p>
            <ContTab />
        </ContWrap>
    );
}

export default Buttons