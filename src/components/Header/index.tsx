import React, { FC } from 'react'
import TextLoop from 'react-text-loop'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'
import { positions } from '../../utils/profile'

type ProfileHeader = {
    author: string
    locale: string
}

export const Header: FC<ProfileHeader> = ({ author, locale }) => {
    return (
        <div className={SC.title}>
            <TextLoop interval={5000}>
                {positions.map((position: string) => (
                    <div key={position}>{position}</div>
                ))}
            </TextLoop>
            <div className={SC.name}>{author}</div>
            <div className={SC.locale}>{locale}</div>
        </div>
    )
}

Header.propTypes = {
    author: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
}
