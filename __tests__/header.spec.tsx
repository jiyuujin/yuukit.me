import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../src/components/Header'

const siteMetadata = {
    title: 'Web Developer',
    titleTemplate: '%s | Portfolio%s | ポートフォリオ',
    // eslint-disable-next-line
    description: `こちらは Web Developer \'Yuma Kitamura\' ポートフォリオです。`,
    biography:
        'ネット上では 自由人、jiyuujin と名乗って生息しています。誕生日は1988年11月04日。大阪府豊中市生まれ。性別は男性。現在は関西圏（京都や大阪）を中心に活動しています。',
    position: 'Front-End Engineer,Web Developer,HR Adviser',
    workExperience:
        '自分のキャリアのスタートはiOSネイティブアプリのエンジニアとして。これまでのキャリアの中でiOSネイティブアプリエンジニアとして業務を通じ基礎的なコーディングを取得、Webを扱うサーバサイドで足りていないと言った環境も相まってjQueryを始めとしたCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んでいきました。',
    author: 'Yuma Kitamura',
    locale: 'Osaka, Kyoto in Japan',
    lonlat: '35.003238° N, 135.750389° E',
    siteUrl: 'https://yuukit.me/',
    image: 'src/images/bakeneko2.png',
    blogName: 'Web猫ブログ',
    blogUrl: 'https://webneko.dev/',
    twitterUsername: '@jiyuujin',
    twitterUrl: 'https://twitter.com/jiyuujinlab',
}

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

describe('Header', () => {
    it('render correctly', () => {
        const tree = renderer.create(<Header data={siteMetadata} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
