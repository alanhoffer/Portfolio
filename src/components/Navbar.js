import '../assets/css/Navbar.css';
import welcomeImage from '../assets/images/asd.png'


function Navbar({ props }) {

    return (
        <nav className="Navbar">
            <ul>
                <li><a href='#home' className={props == 1 ? 'active' : ''}>HOME</a></li>
                <li><a href='#about' className={props == 2 ? 'active' : ''}>ABOUT</a></li>
                <li><a href='#skills' className={props == 3 ? 'active' : ''}>SKILLS</a></li>
                <li><a href='#projects' className={props == 4 ? 'active' : ''}>PROJECTS</a></li>
            </ul>
            <div className='scrollDown'>
                <p>
                    <span>S</span>
                    <span>C</span>
                    <span>R</span>
                    <span>O</span>
                    <span>L</span>
                    <span>L</span>
                    <span> &nbsp; </span>
                    <span>D</span>
                    <span>O</span>
                    <span>W</span>
                    <span>N</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </p>
            </div>
        </nav>
    );
}

export default Navbar;
