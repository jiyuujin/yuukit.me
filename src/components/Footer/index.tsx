import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

const Footer: FC = () => {
    const intl = useIntl()

    return (
        <footer className={SC.footer}>
            <p className={SC.contact}>
                <a
                    href="https://webneko.dev/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {intl.formatMessage({ id: 'contact' })}
                </a>
            </p>
            <p className={SC.copyright}>
                Created © 2020 jiyuujin LAB. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer
