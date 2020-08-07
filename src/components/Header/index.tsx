import React, { FC } from 'react'
import TextLoop from 'react-text-loop'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'
import { positions } from '../../utils/profile'

type ProfileHeader = {
    data: {
        title: string
        titleTemplate: string
        description: string
        biography: string
        position: string
        workExperience: string
        author: string
        locale: string
        url: string
        image: string
        blogName: string
        blogUrl: string
        twitterUsername: string
        twitterUrl: string
    }
}

export const Header: FC<ProfileHeader> = ({ data }) => {
    return (
        <div className={SC.title}>
            <TextLoop interval={5000}>
                {positions.map((position: string) => (
                    <div key={position}>{position}</div>
                ))}
            </TextLoop>
            <div className={SC.name}>{data.author}</div>
            <div className={SC.locale}>{data.locale}</div>
        </div>
    )
}

Header.propTypes = {
    data: PropTypes.any.isRequired,
}
