import { useEffect } from 'react';
import '../assets/css/Navbar.css';
import welcomeImage from '../assets/images/asd.png'


function Navbar(props) {

    const handleScroll = () => {
        switch (props.position) {
            case 1:
                window.location.href = '#about';
                break;
            case 2:
                window.location.href = '#skills';
                break;
            case 3:
                window.location.href = '#projects';
                break;
            case 4:
                window.location.href = '#contact';
                break;
            case 5:
                window.location.href = '#home';
                break;
        }

    }


    return (
        <nav className="Navbar">
            <ul>
                <li className={props.position == 1 ? 'active' : ''}><a href='#home' >HOME</a></li>
                <li className={props.position == 2 ? 'active' : ''}><a href='#about'>ABOUT</a></li>
                <li className={props.position == 3 ? 'active' : ''}><a href='#skills'>SKILLS</a></li>
                <li className={props.position == 4 ? 'active' : ''}><a href='#projects'>PROJECTS</a></li>
                <li className={props.position == 5 ? 'active' : ''}><a href='#contact'>CONTACT</a></li>
            </ul>
            {props.position === 5 ?
                <div className='scroll Up' onClick={handleScroll}>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        <span>S</span>
                        <span>C</span>
                        <span>R</span>
                        <span>O</span>
                        <span>L</span>
                        <span>L</span>
                        <span> &nbsp; </span>
                        <span>U</span>
                        <span>P</span>
                    </p>
                </div>
                :
                <div className='scroll Down' onClick={handleScroll}>
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
            }
        </nav>
    );
}

export default Navbar;
