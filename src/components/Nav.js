import { changeLocale, injectIntl } from 'gatsby-plugin-intl'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import Icon from './Icon'
import Scroll from './Scroll'

const Nav = ({ sticky, intl }) => (
    <nav id="nav" className={sticky ? 'alt' : ''}>
        <Scrollspy items={['about', 'techknowledge', 'education', 'certification', 'systems']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">{intl.formatMessage({ id: "about-title" })}</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="techknowledge">
                    <a href="#">Techknowledge</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="education">
                    <a href="#">{intl.formatMessage({ id: "education-title" })}</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="certification">
                    <a href="#">{intl.formatMessage({ id: "certification-title" })}</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="systems">
                    <a href="#">{intl.formatMessage({ id: "systems-title" })}</a>
                </Scroll>
            </li>
        </Scrollspy>
        <ul>
            <li className={intl.locale === 'en' ? 'translate-selected' : ''} onClick={() => changeLocale('en')} onKeyDown={() => changeLocale('en')}>
                <Icon code="us" />
            </li>
            <li className={intl.locale === 'pt' ? 'translate-selected' : ''} onClick={() => changeLocale('pt')} onKeyDown={() => changeLocale('pt')}>
                <Icon code="br" />
            </li>
        </ul>
    </nav>
)

export default injectIntl(Nav)
