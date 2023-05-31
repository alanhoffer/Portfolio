import { useState } from 'react';
import '../assets/css/Projects.css';
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-1.png'
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
                        <h3>FITNESS & WELLNESS COACHING PLATFORM</h3>
                        <h1>Fit & Healthy</h1>
                        <p>
                            Server rendered, progressive web application for online fitness & health coaching.
                            Providing workout programs, nutritions plans, workout logs, follow up with client's progress and more.
                        </p>
                        <div className='itemButton'>
                            <button>Visit the app</button>
                            <img alt='' src='' />
                        </div>
                    </div>
                </div>
                <div className='sliderItem'>
                    <div className='sliderImageContainer'>
                        <img alt='' src={project2} />
                    </div>
                    <div className='sliderItemContainer'>
                        <h3>FITNESS & WELLNESS COACHING PLATFORM</h3>
                        <h1>Fit & Healthy</h1>
                        <p>
                            Server rendered, progressive web application for online fitness & health coaching.
                            Providing workout programs, nutritions plans, workout logs, follow up with client's progress and more.
                        </p>
                        <div className='itemButton'>
                            <button>Visit the app</button>
                            <img alt='' src='' />
                        </div>
                    </div>
                </div>
                <div className='sliderItem'>
                    <div className='sliderImageContainer'>

                        <img alt='' src={project3} />
                    </div>
                    <div className='sliderItemContainer'>
                        <h3>FITNESS & WELLNESS COACHING PLATFORM</h3>
                        <h1>Fit & Healthy</h1>
                        <p>
                            Server rendered, progressive web application for online fitness & health coaching.
                            Providing workout programs, nutritions plans, workout logs, follow up with client's progress and more.
                        </p>
                        <div className='itemButton'>
                            <button>Visit the app</button>
                            <img alt='' src='' />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Projects;
