import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'

type BasicType = {
    biography: string
    position: string
}

export const Introduction: FC<BasicType> = ({ biography, position }) => {
    const positionList: string[] = position.split(',')

    return (
        <div className={SC.basic}>
            基本情報
            <div className={SC.description}>{biography}</div>
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
    biography: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
}
