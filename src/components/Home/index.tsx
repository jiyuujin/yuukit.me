import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as SC from './index.module.scss'
import HeaderBar from '../HeaderBar'
import Header from '../Header'
import { Payment } from '../Payment'
import { CardWrapper } from '../CardWrapper'
import Introduction from '../Introduction'
import Work from '../Work'
import Product from '../Product'
import Community from '../Community'
import Slide from '../Slide'

const Home: FC = () => {
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
                    lonlat
                    siteUrl
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
                        image
                    }
                }
            }
            allCommunitiesYaml {
                edges {
                    node {
                        id
                        text
                        url
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
                <HeaderBar />
                <Header data={data.site?.siteMetadata} />
                <Payment />
                <CardWrapper data={data.site?.siteMetadata} />
                <Introduction data={data.site?.siteMetadata} />
                <Work data={data.site?.siteMetadata} />
                <Product data={data.allProductsYaml?.edges} />
                <Community data={data.allCommunitiesYaml?.edges} />
                <Slide data={data.allTalksYaml?.edges} />
            </div>
        </div>
    )
}

export default Home
