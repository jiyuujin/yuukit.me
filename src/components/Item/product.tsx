import React, { FC } from 'react'
import PropTypes from 'prop-types'
import * as SC from './index.module.scss'

type ProductProps = {
    data: Array<{
        id: string
        title: string
        description: string
        skills: string[]
    }>
}

export const Product: FC<ProductProps> = ({ data }) => {
    return (
        <div className={SC.basic}>
            プロダクト一覧
            {data.map(({ node }: any) => {
                return (
                    <div key={node.id}>
                        <div className={SC.subtitle}>{node.title}</div>
                        <div
                            className={SC.description}
                            dangerouslySetInnerHTML={{
                                __html: node.description,
                            }}
                        />
                        <div className={SC.subtitle}>利用技術</div>
                        <div className={SC.description}>
                            <ul>
                                {node.skills.map((skill: string) => {
                                    return <li key={skill}>{skill}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
