import React from 'react'
import 'academicons'
import Translate from './Translate'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <ul className="icons">
                <li>
                    <a href="https://github.com/vyk1" target="_blank" rel="noopener noreferrer" className="icon fa-github fa-2x">
                    </a>
                </li>
                <li>
                    <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8605684P7" rel="noreferrer" target="_blank" className="ai ai-lattes ai-2x">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/victoria-botelho-martins-046a5b153/" rel="noreferrer" target="_blank" className="fa fa-linkedin fa-2x"
                        title="Linkedin">
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <ul className="icons">
                <li>
                    <a href="#top">
                        <i className="fa fa-arrow-up"></i>
                    </a>
                </li>
                <li>
                    <Translate />
                </li>
            </ul>
        </section>
        <p className="copyright">
            Templated from &copy;<a className="copyright" a href="https://html5up.net" target="_blank"
                rel="noreferrer"> AppSeed - HTML5 UP</a>
            <br />
            Icons from &copy; <a className="copyright" href="https://jpswalsh.github.io/academicons/" target="_blank"
                rel="noreferrer">Academicons</a>
            {" & "} &copy; <a className="copyright" href="https://fontawesome.com/" target="_blank" rel="noreferrer">FontAwesome</a>
            {" & "} &copy; <a className="copyright" href="https://iconify.design/" target="_blank" rel="noreferrer">iconify.design</a>
            {" & "} &copy; <a className="copyright" href="https://github.com/lipis/flag-icon-css/" target="_blank" rel="noreferrer">flag-icon-css</a>
        </p>
    </footer >
)

export default Footer
