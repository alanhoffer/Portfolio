import '../assets/css/About.css';
import SpanDivider from './SpanDivider';


function About() {
    return (
        <div id="about" className="About">
            <section className='meContainer'>
                <div className='mePresentation'>
                    <h1 className='presentationTitle'> <SpanDivider textArray="Hi, I'm Alan FStack Developer" /> </h1>
                    <p className='presentationText'> Back End Fan / Front End Expert / Programming Lover. </p>
                </div>
                <div className='meDescription'>
                    <h3>ABOUT ME</h3>
                    <p>
                        I am a passionate web developer skilled in React, VueJS, NestJS, and agile methodologies.
                    </p>
                    <p>
                        With a strong commitment to my work, I strive to deliver high-quality results. I value effective communication and actively engage with team members, stakeholders, and clients. As a team player, I contribute actively, support my colleagues, and promote collaboration.
                    </p>
                    <p>
                        Adaptability is one of my strengths, allowing me to keep up with evolving technologies. I am always eager to learn and improve my skills. My dedication to continuous growth drives me to seek opportunities for self-improvement. In summary, I am a communicative, committed, and adaptable web developer, constantly aiming to enhance my abilities.
                    </p>
                    <div className='downloadResume'>
                        <a href="/files/cv-en.pdf"  target="_blank">DOWNLOAD CV</a>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;
