import logo from '../hopeforcpp.svg'
import { useState, useEffect } from 'react';

const carouselItems = ['We are team Hope for a Cpp', 
                              'A team from Fall 2022 of ECE 391', 
                              'A team of people who know how to use Cpp but forgot how to use C ',
                              'That is why we Hope for a Cpp',
                              'Yet, we made it to the end and created this simple Linux OS',
                              '391OS'
                            ];

const BreathingCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeInMs = 5000; 
    const animationStyle = { animation: `breathing-animation ${timeInMs / 1000}s infinite`};

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, timeInMs);
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
    
    return (
        <div className="carousel-container">
            <div className='carousel-item' style={animationStyle}> {carouselItems[activeIndex]}</div>
        </div>
    );
};

const Home = () => {
    
    return (<div className="content-container"> 
        <div className="home-box">
            <div id='homepage-welcome'> Welcome </div>
            <img id='homepage-large-logo' src={logo} alt='hope for a cpp logo' />
            <BreathingCarousel />
            <div className='road-map'> Road map </div>
            <div> {"website is under construction :)"} </div>
        </div>
    </div>);
};

export default Home;