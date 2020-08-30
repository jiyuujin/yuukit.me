import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '../src/components/Header'

const siteMetadata = {
    title: 'Web Developer',
    titleTemplate: "%s | Portfolio",
    description: 'This is the Web Developer \'Yuma Kitamura\' Portfolio.',
    biography: 'ネット上では 自由人、jiyuujinと名乗って生息しています。誕生日は1988年11月04日。大阪府豊中市生まれ。性別は男性。現在は関西圏（京都や大阪）を中心に活動しています。',
    position: 'フロントエンドエンジニア,Webエンジニア,HRアドバイザー',
    workExperience: '自分のキャリアのスタートはiOSネイティブアプリのエンジニアとして。これまでのキャリアの中でiOSネイティブアプリエンジニアとして業務を通じ基礎的なコーディングを取得、Webを扱うサーバサイドで足りていないと言った環境も相まってjQueryを始めとしたCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んでいきました。',
    author: 'Yuma Kitamura',
    locale: 'Osaka, Kyoto in Japan',
    url: 'https://yuukit.me/',
    image: 'src/images/bakeneko2.png',
    blogName: 'Web猫ブログ',
    blogUrl: 'https://webneko.dev/',
    twitterUsername: '@jiyuujin',
    twitterUrl: 'https://twitter.com/jiyuujinlab'
}

describe('Header', () => {
    it('render correctly', () => {
        const tree = renderer
            .create(<Header data={siteMetadata} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
