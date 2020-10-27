import React from 'react'
import renderer from 'react-test-renderer'
import { CookieFooterWrapper } from '../src/components/CookieFooterWrapper'

describe('Cookie Footer Wrapper', () => {
    it('render correctly', () => {
        const tree = renderer.create(<CookieFooterWrapper />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
