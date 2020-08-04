import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'

type ProductProps = {
    data: Array<{
        text: string
        url: string
        youtubeUrl: string
        date: string
    }>
}

export const Product: FC<ProductProps> = ({ data }) => {
    return (
        <div className={SC.basic}>
            プロダクト一覧
            {data.map(({ node }: any) => {
                <>
                    <div className={SC.subtitle}>{node.title}</div>
                    <div
                        className={SC.description}
                        dangerouslySetInnerHTML={{ __html: node.description }}
                    />
                    <div className={SC.subtitle}>利用技術</div>
                    <div className={SC.description}>
                        <ul>
                            {node.skills.map((skill: string) => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                    </div>
                    {node.links &&
                        <ul>
                            {node.links.map((link: any) => {
                                <li key={link.text}>
                                    <a href={link.url}>
                                        {link.text}
                                    </a>
                                </li>
                            })}
                        </ul>
                    }
                </>
            })}
        </div>
    )
}

Product.propTypes = {
    data: PropTypes.any.isRequired,
}
