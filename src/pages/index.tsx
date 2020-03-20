import * as React from 'react'
import Layout from '../components/Layout'
import { Home } from '../components/Home'
import * as SC from './index.module.scss'

export default class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <Layout>
                <div className={SC.container}>
                    <Home />
                </div>
            </Layout>
        )
    }
}
