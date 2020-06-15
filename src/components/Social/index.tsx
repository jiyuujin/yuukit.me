import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'

type ProfileSocial = {
    blogUrl: string
    blogName: string
    twitterUrl: string
    twitterUsername: string
}

export const Social: FC<ProfileSocial> = ({
    blogUrl,
    blogName,
    twitterUrl,
    twitterUsername,
}) => {
    return (
        <div className={SC.social}>
            <div className={SC.item}>
                <a href={blogUrl} target="_blank" rel="noopener noreferrer">
                    {blogName}
                </a>
            </div>
            <div className={SC.item}>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    {twitterUsername}
                </a>
            </div>
        </div>
    )
}

Social.propTypes = {
    blogUrl: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    twitterUrl: PropTypes.string.isRequired,
    twitterUsername: PropTypes.string.isRequired,
}
