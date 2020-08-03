import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'

type ProfileSocial = {
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

export const Social: FC<ProfileSocial> = ({ data }) => {
    return (
        <div className={SC.social}>
            <div className={SC.item}>
                <a
                    href={data.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.blogName}
                </a>
            </div>
            <div className={SC.item}>
                <a
                    href={data.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.twitterUsername}
                </a>
            </div>
        </div>
    )
}

Social.propTypes = {
    data: PropTypes.any.isRequired,
}
