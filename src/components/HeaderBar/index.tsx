import React, { FC } from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

const languageName: {
    [field: string]: string
} = {
    en: 'English',
    ja: '日本語',
}

const HeaderBar: FC = () => {
    return (
        <div className={SC.headerBar}>
            <IntlContextConsumer>
                {({
                    languages,
                    language: currentLocale,
                }: {
                    languages: string[]
                    language: string
                }) =>
                    languages.map((language) => (
                        <a
                            key={language}
                            onClick={() => changeLocale(language)}
                            style={{
                                color:
                                    currentLocale === language
                                        ? 'yellow'
                                        : 'white',
                                margin: 10,
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }}
                        >
                            {languageName[language]}
                        </a>
                    ))
                }
            </IntlContextConsumer>
        </div>
    )
}

export default HeaderBar
