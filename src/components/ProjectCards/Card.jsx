import './Card.css'
import { FaGithub } from 'react-icons/fa';

const Card = (button) => {

    const { projectName, description, projectLink, techStack } = button.experience;

    return(
        <div className="card">
                <h2 className="card-title"> { projectName } </h2>
                {/* Check if the description is an array and render accordingly */}
                {Array.isArray(description) ? (
                    description.map((desc, index) => (
                        <p key={index} className="card-desc"> { desc } </p>
                    ))
                ) : (
                    <p className="card-desc"> { description } </p>
                )}

                {/* Tech stack spot goes here */}
                {techStack.length > 0 && (
                    <div className="card-stack">
                        <span className="card-stack-label">Tech Stack:</span>
                        <ul className="card-tags">
                            {techStack.map((tech) => (
                            <li key={tech} className="card-tag">{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className ="button-container">
                    <button className="card-button" onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}> <FaGithub style={{ marginRight: '8px' }} />
        GitHub</button>
                </div>
        </div>
    );
}

export default Card;