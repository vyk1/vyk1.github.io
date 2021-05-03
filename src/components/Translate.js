import { changeLocale, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Icon from './Icon';

const Translate = () => {
    const locale = useIntl().locale

    return (
        <div id="main">
            {
                locale === 'en' ?
                    <li className={locale === 'pt' ? 'selected' : ''} onClick={() => changeLocale('pt')} onKeyDown={() => changeLocale('pt')}>
                        Traduzir <Icon code="br" />
                    </li>
                    :
                    <li className={locale === 'en' ? 'selected' : ''} onClick={() => changeLocale('en')} onKeyDown={() => changeLocale('en')}>
                        Translate <Icon code="us" />
                    </li>
            }
        </div>
    );
}

export default Translate;
