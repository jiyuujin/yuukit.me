import React from 'react'
import renderer from 'react-test-renderer'
import { Skill } from '../src/components/Skill'

const title: string = 'Vue.js & Nuxt.js'

const rating: number = 5

const items = [
    {
        text: 'v-kansai team member ♥️️',
        strong: true,
    },
    {
        text: 'Vue.js Advocator 😎',
    },
]

describe('Skill', () => {
    it('render correctly', () => {
        const tree = renderer
            .create(<Skill title={title} rating={rating} items={items} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
