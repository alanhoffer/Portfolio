import '../assets/css/Navbar.css';
import welcomeImage from '../assets/images/asd.png'


function Navbar({props}) {

    return (
        <nav className="Navbar">
            <ul>
                <li><a href='#home' className={props == 1 ? 'active': ''}>HOME</a></li>
                <li><a href='#about' className={props == 2 ? 'active': ''}>ABOUT</a></li>
                <li><a href='#skills' className={props == 3 ? 'active': ''}>SKILLS</a></li>
                <li><a href='#projects' className={props == 4 ? 'active': ''}>PROJECTS</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
