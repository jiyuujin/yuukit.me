import React, { FC } from 'react'
import TextLoop from 'react-text-loop'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'
import { positions } from '../../utils/profile'
import { SiteMetadataTypes } from '../../types'

export const Header: FC<SiteMetadataTypes> = ({ data }) => {
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
