import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

type WorkProps = {
    //
}

const Work: FC<WorkProps> = () => {
    const intl = useIntl()

    return (
        <div className="wrapper">
            <div className="section">
                <div className={SC.subtitle}>
                    {intl.formatMessage({ id: 'work' })}
                </div>
                <div className={SC.description}>
                    {intl.formatMessage({ id: 'work_experience' })}
                </div>
                <div className={SC.subtitle}>
                    {intl.formatMessage({ id: 'labels.related_links' })}
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
                                    id: 'labels.curriculum_vitae',
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
            </div>
        </div>
    )
}

export default Work
