import React from 'react'
import * as SC from './index.module.scss'
import { skills } from '../../utils/profile'

type SkillType = {
    title: string
    rating: number
    items: Array<{
        text: string
        strong?: boolean
    }>
}

const Skills = () => {
    return (
        <div className={SC.skills}>
            {skills.map((skill: SkillType, index: number) => {
                return (
                    <div key={index} className={SC.skill}>
                        {skill.title}
                        {skill.items.map(
                            (item: { text: string; strong?: boolean }) => {
                                return (
                                    <div
                                        key={item.text}
                                        className={item.strong ? SC.strong : ''}
                                    >
                                        {item.text}
                                    </div>
                                )
                            }
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Skills
