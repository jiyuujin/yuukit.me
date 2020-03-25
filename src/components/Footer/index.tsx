import React, { FC } from 'react'
import * as SC from './index.module.scss'

export const Footer: FC = () => {
    return (
        <footer className={SC.footer}>
            <p className={SC.contact}>
                <a href="https://webneko.dev/contact" target="_blank" rel="noopener">
                    CONTACT
                </a>
            </p>
            <p className={SC.copyright}>
                Created © 2020 jiyuujin LAB. All Rights Reserved.
            </p>
        </footer>
    )
}