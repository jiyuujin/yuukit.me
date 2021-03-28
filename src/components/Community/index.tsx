import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

type CommunityProps = {
    data: Array<unknown>
}

const Community: FC<CommunityProps> = ({ data }) => {
    const intl = useIntl()

    return (
        <div className={SC.basic}>
            <div className={SC.subtitle}>
                {intl.formatMessage({ id: 'community_text' })}
            </div>
            <div className={SC.description}>
                {intl.formatMessage({ id: 'community_role' })}
            </div>
            <div className={SC.description}>
                <ul>
                    {data.map(({ node }: any) => {
                        return (
                            <li key={node.id}>
                                <div className={SC.link}>
                                    <a
                                        href={node.url}
                                        role="button"
                                        aria-pressed="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {intl.formatMessage({ id: node.text })}
                                    </a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Community
