import { changeLocale, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Icon from './Icon';

const Translate = () => {
    const locale = useIntl().locale

    return (
        <div id="main">
            {
                locale === 'en' ?

                    <ul className='translate-ul' onClick={() => changeLocale('pt')} onKeyDown={() => changeLocale('pt')}>
                        <li>
                            Traduzir <Icon code="br" />
                        </li>
                    </ul>
                    :
                    <ul className='translate-ul' onClick={() => changeLocale('en')} onKeyDown={() => changeLocale('en')}>
                        <li>
                            Translate <Icon code="us" />
                        </li>
                    </ul>
            }
        </div>
    );
}

export default Translate;
