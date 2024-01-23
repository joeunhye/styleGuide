import { NavLink  } from 'react-router-dom';
import './Side.scss';

const Side = () => {
    return(
        <nav className="sideNav">
            <NavLink to='/readme'>Read Me</NavLink>
            <NavLink to='/buttons'>Buttons</NavLink>
        </nav>
    );
}

export default Side