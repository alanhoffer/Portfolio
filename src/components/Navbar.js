import '../assets/css/Navbar.css';
import welcomeImage from '../assets/images/asd.png'


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
