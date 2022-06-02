import React from 'react';
import Card from '../Card';

import contech from '../../assets/images/projects/contech.png'
import estagio_int from '../../assets/images/projects/estagio_int.png'
import gpmpcp from '../../assets/images/projects/gpmpcp.png'
import jd from '../../assets/images/projects/jd-un.svg'
import lar from '../../assets/images/projects/lar.png'
import nritz from '../../assets/images/projects/nritz.png'
import pocketlib from '../../assets/images/projects/pocketlib.png'
import unfold from '../../assets/images/projects/unfold.png'
import vacinacao_covid from '../../assets/images/projects/vacinacao-covid.svg'
import saas from '../../assets/images/projects/saas.png'

const Systems = ({ intl }) => {
    return (
        <section id="systems" className="main special">
            <header className="major">
                <h2>{intl.formatMessage({ id: "systems-title" })}</h2>

                <ul className="features">
                    <Card
                        intl={intl}
                        image={contech}
                        site={intl.formatMessage({ id: "contech.site" })}
                        projectName={intl.formatMessage({ id: "contech.title" })}
                        description={intl.formatMessage({ id: "contech.about" })}
                        t1={intl.formatMessage({ id: "contech.t1" })}
                        t2={intl.formatMessage({ id: "contech.t2" })}
                    />
                    <Card
                        intl={intl}
                        image={estagio_int}
                        site={intl.formatMessage({ id: "ei.site" })}
                        projectName={intl.formatMessage({ id: "ei.title" })}
                        description={intl.formatMessage({ id: "ei.about" })}
                        t1={intl.formatMessage({ id: "ei.t1" })}
                        t2={intl.formatMessage({ id: "ei.t2" })}
                        t3={intl.formatMessage({ id: "ei.t3" })}
                        t4={intl.formatMessage({ id: "ei.t4" })}
                    />
                    <Card
                        intl={intl}
                        image={gpmpcp}
                        site={intl.formatMessage({ id: "gpmpcp.site" })}
                        projectName={intl.formatMessage({ id: "gpmpcp.title" })}
                        description={intl.formatMessage({ id: "gpmpcp.about" })}
                        t1={intl.formatMessage({ id: "gpmpcp.t1" })}
                        t2={intl.formatMessage({ id: "gpmpcp.t2" })}
                        t3={intl.formatMessage({ id: "gpmpcp.t3" })}
                        t4={intl.formatMessage({ id: "gpmpcp.t4" })}
                    />
                    <Card
                        intl={intl}
                        image={jd}
                        site={intl.formatMessage({ id: "jd.site" })}
                        projectName={intl.formatMessage({ id: "jd.title" })}
                        description={intl.formatMessage({ id: "jd.about" })}
                        t1={intl.formatMessage({ id: "jd.t1" })}
                        t2={intl.formatMessage({ id: "jd.t2" })}
                    />
                    <Card
                        intl={intl}
                        image={lar}
                        site={intl.formatMessage({ id: "lar.site" })}
                        projectName={intl.formatMessage({ id: "lar.title" })}
                        description={intl.formatMessage({ id: "lar.about" })}
                        t1={intl.formatMessage({ id: "jd.t1" })}
                    />
                    <Card
                        intl={intl}
                        image={nritz}
                        site={intl.formatMessage({ id: "nritz.site" })}
                        projectName={intl.formatMessage({ id: "nritz.title" })}
                        description={intl.formatMessage({ id: "nritz.about" })}
                        t1={intl.formatMessage({ id: "nritz.t1" })}
                        t2={intl.formatMessage({ id: "nritz.t2" })}
                    />
                    <Card
                        intl={intl}
                        image={pocketlib}
                        site={intl.formatMessage({ id: "plib.site" })}
                        projectName={intl.formatMessage({ id: "plib.title" })}
                        description={intl.formatMessage({ id: "plib.about" })}
                        t1={intl.formatMessage({ id: "plib.t1" })}
                    />
                    <Card
                        intl={intl}
                        image={unfold}
                        site={intl.formatMessage({ id: "unfold.site" })}
                        projectName={intl.formatMessage({ id: "unfold.title" })}
                        description={intl.formatMessage({ id: "unfold.about" })}
                        t1={intl.formatMessage({ id: "unfold.t1" })}
                    />
                    <Card
                        intl={intl}
                        image={vacinacao_covid}
                        site={intl.formatMessage({ id: "vacinacao_covid.site" })}
                        projectName={intl.formatMessage({ id: "vacinacao_covid.title" })}
                        description={intl.formatMessage({ id: "vacinacao_covid.about" })}
                        t1={intl.formatMessage({ id: "vacinacao_covid.t1" })}
                        github={"https://github.com/alexanmtz/informativo-vacina-covid-19"}
                    />
                    <Card
                        intl={intl}
                        image={saas}
                        site={intl.formatMessage({ id: "saas.site" })}
                        projectName={intl.formatMessage({ id: "saas.title" })}
                        description={intl.formatMessage({ id: "saas.about" })}
                        t1={intl.formatMessage({ id: "saas.t1" })}
                    />
                    {/* <li>
                        <span className="icon major style1 fa-code"></span>
                        <h3>Ipsum consequat</h3>
                        <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
                    </li> */}
                </ul>
            </header>
        </section>
    );
}

export default Systems;
