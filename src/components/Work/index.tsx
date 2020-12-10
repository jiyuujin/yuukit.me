import React, { FC } from 'react'
import * as SC from './index.module.scss'
import { skills } from '../../utils/profile'
import { SiteMetadataTypes } from '../../types'

type SkillType = {
    title: string
    rating: number
    items: Array<{
        text: string
        strong?: boolean
    }>
}

const Work: FC<SiteMetadataTypes> = ({ data }) => {
    return (
        <div className={SC.basic}>
            職歴
            <div className={SC.description}>{data.workExperience}</div>
            <div className={SC.subtitle}>関連リンク</div>
            <div className={SC.description}>
                <ul>
                    <li>
                        <a
                            href="https://github.com/jiyuujin/Curriculum-Vitae"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            職務経歴書
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scrapbox.io/nekohack/skillset"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            スキルセット (公開予定)
                        </a>
                    </li>
                </ul>
            </div>
            <div className={SC.subtitle}>スキル</div>
            <div className={SC.skills}>
                {skills.map((skill: SkillType, index: number) => {
                    return (
                        <div key={index} className={SC.skill}>
                            <h2>{skill.title}</h2>
                            {skill.items.map(
                                (item: { text: string; strong?: boolean }) => {
                                    return (
                                        <div
                                            key={item.text}
                                            className={
                                                item.strong ? SC.strong : ''
                                            }
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
        </div>
    )
}

export default Work
