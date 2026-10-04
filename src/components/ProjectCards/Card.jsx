import './Card.css'
import { FaGithub } from 'react-icons/fa';

const Card = (button) => {

    const { projectName, description, projectLink } = button.experience;

    return(
        <div className="card">
                <h2 className="card-title"> { projectName } </h2>
                <p className="card-desc"> { description } </p>
                <div className ="button-container">
                    <button className="card-button" onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}> <FaGithub style={{ marginRight: '8px' }} />
        GitHub</button>
                </div>
        </div>
    );
}

export default Card;