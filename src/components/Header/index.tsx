import React, { FC } from 'react'
import * as SC from './index.module.scss'

type ProfileHeader = {
    title: string
    author: string
    locale: string
}

export const Header: FC<ProfileHeader> = ({ title, author, locale }) => {
    return (
        <div className={SC.title}>
            {title}
            <div className={SC.name}>
                {author}
            </div>
            <div className={SC.locale}>
                {locale}
            </div>
        </div>
    )
}
