import React from 'react'
import renderer from 'react-test-renderer'
import Work from '../src/components/Work'

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
        const tree = renderer.create(<Work />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
