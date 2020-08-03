import React, { FC } from 'react'
import PropTypes from 'prop-types'
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
                    <div
                        key={item.text}
                        className={item.strong ? SC.strong : ''}
                    >
                        {item.text}
                    </div>
                )
            })}
        </div>
    )
}

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
}
