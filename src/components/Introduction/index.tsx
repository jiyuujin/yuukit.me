import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

type IntroductionProps = {
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
            | 'siteUrl'
            | 'image'
            | 'blogName'
        >
    >
}

const Introduction: FC<IntroductionProps> = ({ data }) => {
    const intl = useIntl()

    const positionList: string[] | undefined = data?.position?.split(',')

    return (
        <div className={SC.basic}>
            {intl.formatMessage({ id: 'basic_info' })}
            <div className={SC.description}>
                {intl.formatMessage({ id: 'biography' })}
            </div>
            <div className={SC.subtitle}>
                {intl.formatMessage({ id: 'position' })}
            </div>
            <div className={SC.description}>
                <ul>
                    {positionList?.map((p: string) => {
                        return <li key={p}>{p}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Introduction
