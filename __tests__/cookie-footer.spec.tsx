import React from 'react'
import renderer from 'react-test-renderer'
import { CookieFooter } from '../src/components/CookieFooterWrapper'

describe('Cookie Footer', () => {
    it('render correctly', () => {
        const tree = renderer
            .create(<CookieFooter />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
