import React from 'react'
import renderer from 'react-test-renderer'
import Work from '../src/components/Work'
import { siteMetadata } from './constants'

jest.mock('react-intl', () => {
    const reactIntl = jest.requireActual('react-intl')
    const intl = reactIntl.createIntl({
        locale: 'en',
    })
    return {
        ...reactIntl,
        useIntl: () => intl,
    }
})

describe('Work', () => {
    it('render correctly', () => {
        const tree = renderer.create(<Work data={siteMetadata} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
