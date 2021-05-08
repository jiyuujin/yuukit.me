import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
        <>
            <HeaderBar />
            <Header data={data.site?.siteMetadata} />
            <Payment />
            <CardWrapper data={data.site?.siteMetadata} />
            <Introduction data={data.site?.siteMetadata} />
            <Work />
            <Product data={data.allProductsYaml?.edges} />
            <Community data={data.allCommunitiesYaml?.edges} />
            <Slide data={data.allTalksYaml?.edges} />
        </>
    )
}

export default Home
