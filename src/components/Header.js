import '../assets/css/Header.css';
import welcomeImage from '../assets/images/asd.png'


function Header() {
    return (
            <header className='Header'>
                <div className='logoContainer'>

                    <h1 className='logoText'>PORTFOLIO</h1>
                </div>
                <div className='contactContainer'>
                    <button className='contactButton'>Contact</button>
                </div>
            </header>
    );
}

export default Header;
