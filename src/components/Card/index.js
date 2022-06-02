import React from 'react';

const Card = ({ image, projectName, description, site, t1, t2, t3, t4, intl, github = false }) => {
    return (
        <li>
            <span>
                <img style={{ width: '250px' }} alt={projectName} src={image} />
            </span>
            <h3>{projectName}</h3>
            <div className="box">
                <small>{description}</small>
                <p>
                    <span className="iconify my-2 mx-1" data-icon={t1} data-inline="false" data-width="50" data-height="50"></span>
                    {t2 && <span className="iconify my-2 mx-1" data-icon={t2} data-inline="false" data-width="50" data-height="50"></span>}
                    {t3 && <span className="iconify my-2 mx-1" data-icon={t3} data-inline="false" data-width="50" data-height="50"></span>}
                    {t4 && <span className="iconify my-2 mx-1" data-icon={t4} data-inline="false" data-width="50" data-height="50"></span>}
                </p>
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="icon fa-github fa-2x">
                </a>}
                <br />
                <a href={site} target="_blank" rel="noopener noreferrer">{intl.formatMessage({ id: "visit" })}</a>
            </div>
        </li>
    );
}

export default Card;
