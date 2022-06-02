import { Header, Paragraph } from 'flotiq-components-react';
import React from 'react';
import Logo from '../assets/dalila.jpg';
import CakeDay from '../components/CakeDay';
import SocialIcons from '../components/SocialIcons';

const HomepageSidebar = ({
    headerText1, headerText2, headerText3, subheaderText, paragraphText, list1, list2
}) => (
    <div className="bg-white flex flex-col justify-between">
        <div>
            <div>
                <div className="hidden md:flex items-center justify-center bg-primary py-20 lg:py-28">
                    <img src={Logo} alt="Logo" onClick={() => alert("Miau")} />
                </div>
            </div>
            <div className="flex flex-col px-10 py-5 md:py-24 font-bold">
                <div className="hidden md:block">
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest mb-1 uppercase">
                        {headerText1}
                    </Header>
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest mb-1 uppercase">
                        {headerText2}
                    </Header>
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest uppercase">
                        {headerText3}
                    </Header>
                </div>
                <Header className="mt-5 md:mt-14 !text-base lg:!text-lg !font-normal" level={4}>
                    {subheaderText}
                </Header>
                <Paragraph className="mt-8 md:mt-10 !text-sm lg:!text-base !font-light">
                    {paragraphText}
                </Paragraph>

                <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8605684P7" className='font-bold' target="_blank" rel="noopener noreferrer">
                    <p className='underline decoration-indigo-500 columns-2 pt-2'>
                        {list1}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </p>
                </a>
                <hr />
                <a href="https://www.linkedin.com/in/victoria-botelho-martins-046a5b153" className='font-bold' target="_blank" rel="noopener noreferrer">
                    <p className='underline decoration-indigo-500 columns-2 pt-2'>
                        {list2}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                    </p>
                </a>
                <hr />
                <CakeDay language={'pt'} />
            </div>
        </div>
        <div>
            <div className="mt-8 mb-8 md:mb-0 flex justify-center space-x-2">
                <SocialIcons />
            </div>
            <div className="hidden md:flex justify-between items-center w-full
            px-5 py-5 mt-7 md:mt-15 rounded-t-xl bg-light-gray"
            >
                <p className="text-center text-sm font-light">
                    Templated from &copy; Flotiq
                    {' '}
                    {new Date().getFullYear()}
                </p>
            </div>

        </div>
    </div>
);

export default HomepageSidebar;
