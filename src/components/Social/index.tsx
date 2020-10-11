import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'
import { SiteMetadataTypes } from '../../types'

export const Social: FC<SiteMetadataTypes> = ({ data }) => {
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
