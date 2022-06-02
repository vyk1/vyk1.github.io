import React from 'react';
import MobileHeader from '../components/MobileHeader';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lato', 'bg-light-gray', ...additionalClass].join(' ')}>
        <MobileHeader
            additionalClass={['md:hidden']}
            headerText1="Portfolio"
            headerText2="VBM"
            headerText3=""
        />
        {children}
    </main>
);

export default Layout;
