import React from 'react';

const Education = ({ intl }) => {
    return (
        <section id="education" className="main special">
            <header className="major">
                <h2>{intl.formatMessage({ id: "education-title" })}</h2>

                <div className="features box">
                    <li>
                        <p>2020/2 - </p>
                        {intl.formatMessage({ id: "post-grad-title" })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: "post-grad-1-title" })}
                        <br />
                        {intl.formatMessage({ id: "post-grad-1-description" })}
                        <br />
                        {intl.formatMessage({ id: "post-grad-1-text" })}
                    </li>
                </div>

                <div className="features box">
                    <li>
                        <p>2017/1 - 2019/2</p>
                        {intl.formatMessage({ id: "grad-title" })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: "grad-1-title" })}
                        <br />
                        {intl.formatMessage({ id: "grad-1-description" })}
                        <br />
                        {intl.formatMessage({ id: "grad-1-text" })}
                    </li>
                </div>
            </header>
        </section >
    );
}

export default Education;
