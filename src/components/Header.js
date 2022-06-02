import React from 'react'

import vbm from '../assets/images/vbm.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo">
            <img src={vbm} className="icon major" alt="vbm" />
        </span>
        <h1>
            Victoria Botelho Martins
        </h1>
    </header>
)

export default Header
