import { Link } from "react-router-dom";

const NoPage = () => {
    return(<div className="content-404">
        <h1>OOPS! Nothing is here!</h1>
        <div className="redirect-button"><Link to='/'> Go Back To Home </Link></div>
    </div>);
}

export default NoPage;