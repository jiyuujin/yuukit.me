import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import dayjs from 'dayjs'
import * as SC from './index.module.scss'

type SlideProps = {
    data:
        | Array<{
              node: Pick<
                  GatsbyTypes.ProductsYaml,
                  'id' | 'title' | 'description' | 'skills'
              >
          }>
        | any
}

const Slide: FC<SlideProps> = ({ data }) => {
    const intl = useIntl()

    const dateFormat = (d: string) => {
        return dayjs(new Date(d)).format('YYYY年MM月DD日')
    }

    return (
        <div className={SC.basic}>
            <div className={SC.subtitle}>
                {intl.formatMessage({ id: 'slide' })}
            </div>
            <div className={SC.description}>
                <ul>
                    {data.map(({ node }: any) => {
                        return (
                            <li key={node.id}>
                                <div>{dateFormat(node.date)}</div>
                                <div className={SC.link}>
                                    <a href={node.url}>
                                        {intl.formatMessage({ id: node.text })}
                                    </a>
                                </div>
                                {node.youtubeUrl && (
                                    <div className={SC.link}>
                                        <a href={node.youtubeUrl}>
                                            {node.youtubeUrl}
                                        </a>
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Slide
