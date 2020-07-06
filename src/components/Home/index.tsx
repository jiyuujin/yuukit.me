import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as SC from './index.module.scss'
import { Header } from '../Header'
import { Social } from '../Social'
import { Introduction } from '../Item/introduction'
import { Work } from '../Item/work'
import { ProductList, ProductDescription } from '../Item/product'
import { SlideList } from '../Item/slide'

export const Home: FC = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    biography
                    position
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
        }
    `)

    return (
        <div className={SC.top}>
            <div className={SC.wrapper}>
                <Header
                    author={data.site?.siteMetadata?.author}
                    locale={data.site?.siteMetadata?.locale}
                />
                <Social
                    blogUrl={data.site?.siteMetadata?.blogUrl}
                    blogName={data.site?.siteMetadata?.blogName}
                    twitterUrl={data.site?.siteMetadata?.twitterUrl}
                    twitterUsername={data.site?.siteMetadata?.twitterUsername}
                />
                <Introduction
                    biography={data.site?.siteMetadata?.biography}
                    position={data.site?.siteMetadata?.position}
                />
                <Work />
                <ProductList />
                <ProductDescription />
                <SlideList />
            </div>
        </div>
    )
}
