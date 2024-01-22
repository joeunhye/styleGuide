import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Side from '../Side/Side';

const Layout = () => {
    return(
        <div>
            <Header />
            <div>
                <Side />
            </div>
            <Footer />
        </div>
    );
}

export default Layout