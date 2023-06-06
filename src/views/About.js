const AboutNavigation = () => {
    return (<div className='about-nav'>
    </div>)
}

const About = () => {
    return (<div className="content-container">
        <AboutNavigation />
        <div id='about-box'>
            <div id='about-page-title'>About</div>
            <div>
                This is the last MP (machine problem) of the course ECE 391 
                in Fall 2022 at the University of Illinois Urbana-Champaign.
            </div>
            <div id='about-tech-section'>
                <h3>391OS Overview</h3>
                <div>
                    List of features:
                </div>
            </div>
            <div
                id='about-other-section' 
            >
                <WebDevInfo />
            </div>
        </div>
    </div>);
}

const WebDevInfo = () => {
    return (
        <>
            <div className='wed-dev-info'>
                <h3> Web Developments:</h3>
                <div> The online emulator is powered by 
                    <a href="https://github.com/copy/v86" target="_blank" rel='noreferrer'> v86</a>.
                </div>
                <div> The website is developed with 
                    <a href='https://react.dev/' target="_blank" rel='noreferrer'> ReactJS</a>.
                </div>
                <div> 
                    <a href="https://www.figma.com/" target="_black" rel="noreferrer" >Figma</a> is our best friend for designing the website.
                </div>
            </div>
            <div>
                <h3>Something else...</h3>
                <div>Hey there! The designer and developer, Dongming (or MeanPaper) is here!</div>
                <div>The styling of the website is inspired by the styling used on 
                    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> vite </a> (a great tool for React App but it gives some trouble when developing the website).
                </div>
                <div>The team/website logo is inspired by the logo of C++. </div>
            </div>
        </>
    );
}

export default About;