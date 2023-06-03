import PropTypes from 'prop-types'

// use to generate the links and logos for the social media
const SocialMediaSection = ({socialMedias}) => {
    const socialMediaList = Object.keys(socialMedias);
    const socialMediaAnchors = socialMediaList.map((item, index)=>{

        // simple check to see if link string contains http
        let link = socialMedias[item];
        let hasHttp = link.indexOf('https://')===0 ? true : (link.indexOf('http://')===0 ? true : false);
        link = hasHttp ? link : 'https://'+link;

        return (<a href={link} key={`${index}-${socialMedias[item]}`} target='_blank' rel="noreferrer">
            {item}
            {/* replace the item with item images */}
        </a>);
    });
    return(<div className='social-media-container'>
        {socialMediaAnchors}
    </div>); 
}

// use to generate a single person contact information card
const ContactCard = ({person}) => {

    return (<div className='contact-card'>
        <img className='profile-picture' src={person.profilePic} alt={`${person.name}'s profile pic`} />
        <div className='profile-info'>
            <div id='person-name'>{person.name}</div>
            <div id='person-email'>{person.email}</div>
            {Object.keys(person).includes('socialMedias') && <SocialMediaSection socialMedias={person.socialMedias}/>}
        </div>
    </div>);
}

ContactCard.propTypes={
    person: PropTypes.object,
};


export default ContactCard;
