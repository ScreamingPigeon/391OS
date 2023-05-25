import ContactCard from "../components/ContactCard";
import reactLogo from "../logo.svg"

const personInfo = [
    {name: 'Hello', profilePic: reactLogo, email: '123@gmail.com', socialMedias:{github: 'https://github.com/MeanPaper',},},
    {name: 'Hello', profilePic: reactLogo, email: '123@gmail.com', socialMedias:{github: 'https://github.com/MeanPaper',},},
    {name: 'Hello', profilePic: reactLogo, email: '123@gmail.com', socialMedias:{github: 'https://github.com/MeanPaper',},},
    {name: 'Hello', profilePic: reactLogo, email: '123@gmail.com', socialMedias:{github: 'https://github.com/MeanPaper',},},
];

const Contact = () => {
    
    const cards = personInfo.map((person, index)=>{
        return <ContactCard key={`person-${index}`} person={person}/>
    });
    
    return (<div className="content-container">
        <div id='contact-box'>
            <div id='contact-page-title'>Contact</div>
            <div className="contact-cards-container">
                {cards}
            </div>
        </div>
    </div>)
}

export default Contact;