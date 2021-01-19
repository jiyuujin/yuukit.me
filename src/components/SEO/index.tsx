import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

type SEOPropTypes = {
    title: string
    description: string
    image: string
    pathname: string
    article: boolean
}

const SEO = ({
    title,
    description,
    image,
    pathname,
    article,
}: SEOPropTypes) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    title,
                    titleTemplate,
                    description,
                    url,
                    image,
                    twitterUsername,
                },
            },
        }) => {
            const seo = {
                title: title,
                description: description,
                image: image,
                url: `${url}${pathname || '/'}`,
            }
            return (
                <Helmet
                    title={seo.title}
                    titleTemplate={titleTemplate}
                    htmlAttributes={{ lang: 'ja' }}
                >
                    <meta name="image" content={seo.image} />
                    <meta name="description" content={seo.description} />
                    <meta property="og:url" content={seo.url} />
                    <meta property="og:image" content={seo.image} />
                    <meta property="og:title" content={seo.title} />
                    <meta property="og:description" content={seo.description} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content={seo.image} />
                    <meta name="twitter:creator" content={twitterUsername} />
                    <meta name="twitter:title" content={seo.title} />
                    <meta
                        name="twitter:description"
                        content={seo.description}
                    />
                </Helmet>
            )
        }}
    />
)

export default SEO

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                titleTemplate
                description
                url
                image
                twitterUsername
            }
        }
    }
`
