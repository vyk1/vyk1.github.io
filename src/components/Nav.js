import { changeLocale, injectIntl } from 'gatsby-plugin-intl'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { useIntl } from "gatsby-plugin-intl"
import Icon from './Icon'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={['about', 'techknowledge', 'education', 'systems']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">{useIntl().formatMessage({ id: "about-title" })}</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="techknowledge">
                    <a href="#">Techknowledge</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="education">
                    <a href="#">{useIntl().formatMessage({ id: "education-title" })}</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="certification">
                    <a href="#">{useIntl().formatMessage({ id: "certification-title" })}</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="systems">
                    <a href="#">{useIntl().formatMessage({ id: "systems-title" })}</a>
                </Scroll>
            </li>
        </Scrollspy>
        <ul>
            <li className={useIntl().locale === 'en' ? 'selected' : ''} onClick={() => changeLocale('en')} onKeyDown={() => changeLocale('en')}>
                <Icon code="us" />
            </li>
            <li className={useIntl().locale === 'pt' ? 'selected' : ''} onClick={() => changeLocale('pt')} onKeyDown={() => changeLocale('pt')}>
                <Icon code="br" />
            </li>
        </ul>
    </nav>
)

export default injectIntl(Nav)
