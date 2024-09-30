import {Link} from 'react-router-dom';
import logo from '../assets/darkskullz9-website-logo.svg'

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center py-4 px-8 bg-darkpurple text-periwinkle'>
            <Link to="/">
                <img
                    className='w-32 h-auto'
                    src={logo}
                    alt='Darkskullz9 Website logo'
                />
            </Link>

            <nav className='flex space-x-8'>
                <Link
                    className='hover:text-majorelleblue transition duration-200'
                    to="/"
                >
                    Home
                </Link>

                <Link
                    className='hover:text-majorelleblue transition duration-200'
                    to="/music"
                >
                    Music
                </Link>

                <Link 
                    className='hover:text-majorelleblue transition duration-200'
                    to="/gaming"
                >
                    Gaming
                </Link>

                <Link
                    className='hover:text-majorelleblue transition duration-200'
                    to="/about"
                >
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;