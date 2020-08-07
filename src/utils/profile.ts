export const positions: string[] = [
    'Web Developer 🔨',
    'Vue.js Advocator 😎',
    'React Enthusiast 😀',
]

export const skills: Array<{
    title: string
    rating: number
    items: Array<{
        text: string
        strong?: boolean
    }>
}> = [
    {
        title: 'Vue.js & Nuxt.js',
        rating: 5,
        items: [
            {
                text: 'v-kansai team member ♥️️',
                strong: true,
            },
            {
                text: 'Vue.js Advocator 😎',
            },
        ],
    },
    {
        title: 'Node.js & JavaScript',
        rating: 4,
        items: [
            {
                text: 'ES6',
                strong: true,
            },
            {
                text: 'Plugin Creation',
                strong: true,
            },
            {
                text: 'Babel',
            },
            {
                text: 'Webpack',
            },
        ],
    },
    {
        title: 'React',
        rating: 3,
        items: [
            {
                text: 'React Enthusiast 😀',
                strong: true,
            },
            {
                text: 'Next.js',
            },
            {
                text: 'Gatsby.js',
            },
        ],
    },
    {
        title: 'VC & CI',
        rating: 4,
        items: [
            {
                text: 'Git',
                strong: true,
            },
            {
                text: 'Github Actions',
            },
            {
                text: 'Gitlab CI',
            },
            {
                text: 'Travis CI',
            },
        ],
    },
    {
        title: 'Infrastructure',
        rating: 4,
        items: [
            {
                text: 'Serverless ✍️',
                strong: true,
            },
            {
                text: 'AWS',
                strong: true,
            },
            {
                text: 'GCP / Firebase',
            },
            {
                text: 'Netlify',
            },
        ],
    },
    {
        title: 'Scala',
        rating: 3,
        items: [
            {
                text: 'Playframework',
                strong: true,
            },
            {
                text: 'Akka HTTP',
            },
        ],
    },
]
