import React, { FC } from 'react'
import PropTypes from 'prop-types'
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
            <div className={SC.name}>{author}</div>
            <div className={SC.locale}>{locale}</div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
}
