import {Link} from 'react-router-dom';
import logo from '../assets/darkskullz9-website-logo.svg'
import '../styles/header.css'

const Header = () => {
    return (
        <header className='header flex justify-between items-center py-4 px-8 bg-darkpurple text-periwinkle'>
            <Link to="/">
                <img
                    className='website-logo w-32 h-auto'
                    src={logo}
                    alt='Darkskullz9 Website logo'
                />
            </Link>

            <nav>
                <Link
                    className='pageLink'
                    to="/"
                >
                    Home
                </Link>

                <Link
                    className='pageLink'
                    to="/music"
                >
                    Music
                </Link>

                <Link 
                    className='pageLink'
                    to="/gaming"
                >
                    Gaming
                </Link>

                <Link
                    className='pageLink'
                    to="/about"
                >
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;