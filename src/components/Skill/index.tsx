import React, { FC } from 'react'
import * as SC from './index.module.scss'

type SkillType = {
    title: string
    rating: number
    items: Array<{
        text: string
        strong?: boolean
    }>
}

export const Skill: FC<SkillType> = ({ title, rating, items }) => {
    return (
        <div className={SC.skill}>
            <h2>{title}</h2>
            {items.map((item: any) => {
                return (
                    <div className={item.strong ? SC.strong : ''}>
                        {item.text}
                    </div>
                )
            })}
        </div>
    )
}
