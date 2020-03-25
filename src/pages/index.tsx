import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Home } from '../components/Home'
import { Footer } from '../components/Footer'
import * as SC from './index.module.scss'

export default class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <Layout>
                <SEO />
                <div className={SC.container}>
                    <Home />
                    <Footer />
                </div>
            </Layout>
        )
    }
}
