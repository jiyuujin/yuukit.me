import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
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

type WorkProps = {
    data: GatsbyTypes.Maybe<
        Pick<
            GatsbyTypes.SiteSiteMetadata,
            | 'title'
            | 'description'
            | 'biography'
            | 'position'
            | 'workExperience'
            | 'author'
            | 'locale'
            | 'lonlat'
            | 'url'
            | 'image'
            | 'blogName'
        >
    >
}

const Work: FC<WorkProps> = ({ data }) => {
    const intl = useIntl()

    return (
        <div className={SC.basic}>
            {intl.formatMessage({ id: 'work' })}
            <div className={SC.description}>
                {intl.formatMessage({ id: 'work_experience' })}
            </div>
            <div className={SC.subtitle}>
                {intl.formatMessage({ id: 'related_links' })}
            </div>
            <div className={SC.description}>
                <ul>
                    <li>
                        <a
                            href="https://github.com/jiyuujin/Curriculum-Vitae"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {intl.formatMessage({
                                id: 'curriculum_vitae',
                            })}
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scrapbox.io/nekohack/skillset"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {intl.formatMessage({
                                id: 'skill_set_coming_soon',
                            })}
                        </a>
                    </li>
                </ul>
            </div>
            <div className={SC.subtitle}>
                {intl.formatMessage({ id: 'skill' })}
            </div>
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
