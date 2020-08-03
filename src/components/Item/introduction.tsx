import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'

type BasicType = {
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

export const Introduction: FC<BasicType> = ({ data }) => {
    const positionList: string[] = data.position.split(',')

    return (
        <div className={SC.basic}>
            基本情報
            <div className={SC.description}>{data.biography}</div>
            <div className={SC.subtitle}>職業</div>
            <div className={SC.description}>
                <ul>
                    {positionList.map((p: string) => {
                        return <li key={p}>{p}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

Introduction.propTypes = {
    data: PropTypes.any.isRequired,
}
