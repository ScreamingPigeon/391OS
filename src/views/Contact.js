import ContactCard from "../components/ContactCard";
import reactLogo from "../logo.svg"

import meanpaperPic from "../images/meanpaper_avatar.png"

// team member information json object
const personInfo = [
    { name: 'Dongming Liu', profilePic: meanpaperPic, email: 'ldm1833991255@gmail.com', 
      socialMedias:{github: 'https://github.com/MeanPaper',},
    },
    { name: 'Elijah Ye', profilePic: reactLogo, email: '123@gmail.com', 
      socialMedias:{github: 'https://github.com/MeanPaper',},
    },
    { name: 'Owen Xu', profilePic: reactLogo, email: '123@gmail.com', 
      socialMedias:{github: 'https://github.com/MeanPaper',},
    },
    { name: 'Xinyu Wu', profilePic: reactLogo, email: '123@gmail.com', 
      socialMedias:{github: 'https://github.com/MeanPaper',},
    },
];

const Contact = () => {
    const cards = personInfo.map((person, index)=>{
        const oddOrEven = index % 2 === 0 ? 'even-card' : 'odd-card';
        return <ContactCard className={oddOrEven} key={`person-${index}`} person={person}/>
    });
    
    return (<div className="content-container">
        <div id='contact-box'>
            <div id='contact-page-title'>Contact</div>
            <div id='contact-page-description'>
              <div> Here are the team members of Hope for a C++. </div>
              <div> Everyone of us put great effort in building 391OS. </div>
            </div>
            <div className="contact-cards-container">
              {cards}
            </div>
        </div>
    </div>)
}

export default Contact;