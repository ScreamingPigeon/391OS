import logo from '../hopeforcpp.svg'
const Home = () => {
    const descriptionItem = 'home-description-item';
    return (<div className="content-container"> 
        <div className="home-box">
            <h1> Welcome </h1>
            <img id='homepage-large-logo' src={logo} alt='hope for a cpp logo' />
            <div id='homepage-description'>
                <div className={descriptionItem}> We are team Hope for a Cpp </div>
                <div className={descriptionItem}> A team from Fall 2022 of ECE 391</div>
                <div className={descriptionItem}> A team of people who know how to use Cpp but forgot how to use C </div>
                <div className={descriptionItem}> That is why we Hope for a Cpp </div>
                <div className={descriptionItem}> Yet, we made it to the end and created this simple Linux OS </div>
                <div className={descriptionItem}> <code>391OS</code></div>
            </div>
            <div className='road-map'> Road map </div>
        </div>
    </div>);
};

export default Home;