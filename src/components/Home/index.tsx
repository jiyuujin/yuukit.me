import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as SC from './index.module.scss'
import { Header } from '../Header'
import { Social } from '../Social'
import { Introduction } from '../Item/introduction'
import { Work } from '../Item/work'
import { Product } from '../Item/product'
import { Slide } from '../Item/slide'

export const Home: FC = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    biography
                    position
                    workExperience
                    author
                    locale
                    url
                    image
                    blogName
                    blogUrl
                    twitterUsername
                    twitterUrl
                }
            }
            allProductsYaml {
                edges {
                    node {
                        id
                        title
                        description
                        skills
                    }
                }
            }
            allTalksYaml {
                edges {
                    node {
                        id
                        text
                        url
                        youtubeUrl
                        date
                    }
                }
            }
        }
    `)

    return (
        <div className={SC.top}>
            <div className={SC.wrapper}>
                <Header data={data.site?.siteMetadata} />
                <Social data={data.site?.siteMetadata} />
                <Introduction data={data.site?.siteMetadata} />
                <Work data={data.site?.siteMetadata} />
                <Product data={data.allProductsYaml?.edges} />
                <Slide data={data.allTalksYaml?.edges} />
            </div>
        </div>
    )
}
