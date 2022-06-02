import React from 'react';

const About = ({ intl }) => {

    const isCakeDay = () => {

        const hoje = new Date()
        if (hoje.getDate() === 14 && hoje.getMonth() + 1 === 3) {
            return true
        }
        return false
    }
    return (
        <section id="about" className="main">
            <div className="spotlight">
                <div className="content">
                    <header className="major">
                        <h2>{intl.formatMessage({ id: "about-title" })}</h2>
                    </header>
                    <p>
                        {intl.formatMessage({ id: "about-text" })}
                    </p>
                    {/* Cake day */}
                    {isCakeDay() && (
                        <div className="cakeDay">
                            <div>
                                <strong>{intl.formatMessage({ id: "cake-day-title" })}</strong>
                            </div>
                            <span>{intl.formatMessage({ id: "cake-day-text" })}{" "}</span>
                            <i className="ml-1 fa fa-birthday-cake"></i>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default About;
