import { useState } from 'react';
import '../assets/css/Projects.css';
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';


function Projects() {

    // SI APRETO NEXT HAY QUE AGREGAR UNA CLASE Q HAGA LA ANIMACION PARA X LADO Y SI VA APARA ATRAS QUE HAGA OTRA PARA OTRO LADO Y LISTO

    const [slider, setSlider] = useState(0);

    return (
        <div id="projects" className="Projects">
            <Carousel showArrows={false} showStatus={false} showIndicators={true} showThumbs={false}>
                <div className='sliderItem'>
                    <div className='sliderImageContainer'>
                        <img alt='' src={project1} />
                    </div>
                    <div className='sliderItemContainer'>
                        <h3>ECOMMERCE FOR VINTAGE CLOTHING.</h3>
                        <h1>LEMON LANE</h1>
                        <p>
                            Lemon Lane is an online store for vintage clothing, offering exclusive design caps, t-shirts, pants, hoodies, jackets, and socks. It is accessible from any device, with authentication through popular social media, nationwide shipping in Argentina, and diverse payment methods using third-party technology.
                        </p>
                        <div className='tecnologysContainer'>
                            <p className='tecnologysItem'>HTML</p>
                            <p className='tecnologysItem'>CSS3</p>
                            <p className='tecnologysItem'>JavaScript</p>
                            <p className='tecnologysItem'>VueJS</p>
                            <p className='tecnologysItem'>NestJS</p>
                            <p className='tecnologysItem'>MySQL</p>
                        </div>
                        <div className='itemButton'>
                            <a href='https://lemon-lane.vercel.app/' target="_blank">Visit the app</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <img alt='' src='https://lemon-lane.vercel.app/assets/logo-d9cff3ea.svg' />
                        </div>
                    </div>
                </div>
                <div className='sliderItem'>
                    <div className='sliderImageContainer'>
                        <img alt='' src={project2} />
                    </div>
                    <div className='sliderItemContainer'>
                        <h3>BEEKEEPING MANAGEMENT TOOL</h3>
                        <h1>APITOOL</h1>
                        <p>
                            Apitool is a mobile app designed for beekeepers, providing efficient hive management and informed decision-making, including hive tracking, health monitoring, honey production tracking, task management, and event calendar. Simplifying beekeeping activities, it empowers beekeepers to optimize their work.
                        </p>
                        <div className='tecnologysContainer'>
                            <p className='tecnologysItem'>HTML</p>
                            <p className='tecnologysItem'>CSS3</p>
                            <p className='tecnologysItem'>JavaScript</p>
                            <p className='tecnologysItem'>VueJS</p>
                        </div>
                        <div className='itemButton'>
                            <a href='https://apitool-app-vue.vercel.app/#/products' target="_blank">Visit the app</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <img alt='' src='https://camo.githubusercontent.com/b9b00393c8758b5bec3b31be1962e0400cd8f2b7ff12266dec8796fae9036e0d/68747470733a2f2f617069746f6f6c2d6170702d7675652e76657263656c2e6170702f696d672f536f6c69644c6f676f2e36353463613063382e706e67' />
                        </div>
                    </div>
                </div>
                <div className='sliderItem'>
                    <div className='sliderImageContainer'>

                        <img alt='' src={project3} />
                    </div>
                    <div className='sliderItemContainer'>
                        <h3>TO DO MANAGEMENT WEBSITE</h3>
                        <h1>TASKEANO</h1>
                        <p>
                            Taskeano is a versatile to-do app that helps you stay organized and focused. With TaskMaster, you can easily create, manage, and prioritize tasks, set reminders, and track your progress. The app offers intuitive features such as categorization, due dates, and task notes, ensuring that you never miss an important deadline.
                        </p>
                        <div className='tecnologysContainer'>
                            <p className='tecnologysItem'>HTML</p>
                            <p className='tecnologysItem'>CSS3</p>
                            <p className='tecnologysItem'>JavaScript</p>
                            <p className='tecnologysItem'>VueJS</p>
                            <p className='tecnologysItem'>Mockapi</p>
                        </div>
                        <div className='itemButton'>
                            <a href='https://todo-wine-five.vercel.app/' target="_blank">Visit the app</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <img alt='' src='' />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Projects;
