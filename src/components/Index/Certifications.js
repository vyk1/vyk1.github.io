import React from 'react';


const Certifications = ({ intl }) => {
    const arr = [
        {
            name: "ML0101EN: Machine Learning with Python: A Practical Introduction",
            responsable: "EDX",
            date: "2020"
        },
        {
            name: "LPI - Linux Essentials",
            responsable: "Cisco NetAcad",
            date: "2019"
        },
        {
            name: "CCNA Routing and Switching: Introduction to Networks",
            responsable: "Cisco NetAcad",
            date: "2018"
        },
        {
            name: intl.formatMessage({ id: "english-course-title" }),
            responsable: "Centro de Cultura Anglo Americana (CCAA)",
            date: "- 2016"
        },
    ]
    return (
        <section id="certification" className="main special">
            <header className="major">
                <h2>{intl.formatMessage({ id: "certification-title" })}</h2>

                {
                    arr.map((e, i) => (
                        <div key={i} className="features box">
                            <li>
                                <p>{e.date}</p>
                                {e.responsable}
                            </li>
                            <li>
                                {e.name}
                            </li>
                        </div>
                    ))
                }


            </header>
        </section >
    );
}

export default Certifications;
