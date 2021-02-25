import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

type ProductProps = {
    data: Array<{
        node: Pick<
            GatsbyTypes.ProductsYaml,
            'id' | 'title' | 'description' | 'skills' | 'image'
        >
    }>
}

const Product: FC<ProductProps> = ({ data }) => {
    const intl = useIntl()

    return (
        <div className={SC.basic}>
            <div className={SC.subtitle}>
                {intl.formatMessage({ id: 'product' })}
            </div>
            {data.map(({ node }: any) => {
                return (
                    <div key={node.id}>
                        <div className={SC.subtitle}>{node.title}</div>
                        {node.image && (
                            <img
                                src={node.image}
                                alt={node.title}
                                decoding="async"
                            />
                        )}
                        <div
                            className={SC.description}
                            dangerouslySetInnerHTML={{
                                __html: intl.formatMessage({
                                    id: node.description,
                                }),
                            }}
                        />
                        <div className={SC.subtitle}>
                            {intl.formatMessage({
                                id: 'technology_used',
                            })}
                        </div>
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

export default Product
