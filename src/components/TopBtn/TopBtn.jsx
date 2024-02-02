import styles from './TopBtn.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { throttle } from 'lodash';

const cx = classNames.bind(styles);

const TopBtn = () => {
    const [IsScrolled, setIsScrolled] = useState(false);
    
    const handleScroll = throttle(() => {
        if(window.scrollY > 100) {
            setIsScrolled(true)
        }else {
            setIsScrolled(false)
        }
    }, 500);
    
    const moveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <button className={cx('topBtn', {active: IsScrolled})} onClick={moveToTop}>
            <TbSquareRoundedArrowUpFilled />
        </button>
    );
}

export default TopBtn