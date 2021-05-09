import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Home'
import Footer from '../components/Footer'
import { CookieFooterWrapper } from '../components/Footer/cookie'
import * as SC from './index.module.scss'
// import { Helmet } from 'react-helmet'

export default class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <Layout>
                <SEO title="Web Developer - Yuma Kitamura" />
                <div className={SC.container}>
                    <Home />
                    <Footer />
                    <CookieFooterWrapper />
                </div>
            </Layout>
        )
    }
}
