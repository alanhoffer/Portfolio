import '../assets/css/Home.css';
import welcomeImage from '../assets/images/asd.png'


function Home() {
    return (
        <div id="home" className="Home">
            <section className='homeContainer'>
                <div className='welcomeContainer'>
                    <h1 className='welcomeTitle'> Full-Stack Software Developer</h1>
                    <p className='welcomeText'>
                        Proficient in various programming languages and frameworks, I have the ability to create robust and scalable web applications. With a strong understanding of user experience and server-side architecture, I am able to deliver end-to-end solutions that meet client requirements.
                    </p>
                    <button className='welcomeButton'>
                        <a href='#about'>About me
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>



                    </button>
                </div>
                <div className='welcomeImage'>
                    <img alt='' src={welcomeImage} />
                </div>
            </section>
        </div>
    );
}

export default Home;
