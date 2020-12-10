import React, { FC } from 'react'
import * as SC from './index.module.scss'
import { SiteMetadataTypes } from '../../types'

const Introduction: FC<SiteMetadataTypes> = ({ data }) => {
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

export default Introduction
