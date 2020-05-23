import React, { FC } from 'react'
import * as SC from './index.module.scss'
import {
    product as profileProduct,
    usedSkills as profileUsedSkills,
} from '../../utils/profile'
import {
    product as blogProduct,
    productLinks as blogProductLinks,
    usedSkills as blogUsedSkills,
} from '../../utils/blog'
import { productLinks as talkProductLinks } from '../../utils/talk'

export const Home: FC = () => {
    return (
        <div className={SC.top}>
            <div className={SC.wrapper}>
                <div className={SC.title}>
                    Web Developer
                    <div className={SC.name}>Yuma Kitamura</div>
                    <div className={SC.locale}>Osaka, Kyoto in Japan</div>
                </div>
                <div className={SC.social}>
                    <div className={SC.item}>
                        <a
                            href="https://webneko.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Blog
                        </a>
                    </div>
                    <div className={SC.item}>
                        <a
                            href="https://twitter.com/jiyuujinlab"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
                <div className={SC.basic}>
                    基本情報
                    <div className={SC.description}>
                        ネット上では 自由人、jiyuujin
                        と名乗って生息しています。誕生日は1988年11月04日。大阪府豊中市生まれ。性別は男性。現在は関西圏（京都や大阪）を中心に活動しています。
                    </div>
                    <div className={SC.subtitle}>職業</div>
                    <div className={SC.description}>
                        <ul>
                            <li>フロントエンドエンジニア</li>
                            <li>Webデベロッパ</li>
                            <li>HRアドバイザ</li>
                        </ul>
                    </div>
                </div>
                <div className={SC.basic}>
                    職歴
                    <div className={SC.description}>
                        自分のキャリアのスタートはiOSネイティブアプリのエンジニアとして。これまでのキャリアの中でiOSネイティブアプリエンジニアとして業務を通じ基礎的なコーディングを取得、Webを扱うサーバサイドで足りていないと言った環境も相まってjQueryを始めとしたCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んでいきました。
                    </div>
                    <div className={SC.subtitle}>関連リンク</div>
                    <div className={SC.description}>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/jiyuujin/Curriculum-Vitae"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    職務経歴書
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://scrapbox.io/nekohack/skillset"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    スキルセット (公開予定)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={SC.basic}>
                    プロダクト一覧
                    <div className={SC.subtitle}>
                        Web Developer - Yuma Kitamura
                    </div>
                    <div
                        className={SC.description}
                        dangerouslySetInnerHTML={{ __html: profileProduct }}
                    />
                    <div className={SC.subtitle}>利用技術</div>
                    <div className={SC.description}>
                        <ul>
                            {profileUsedSkills.map((skill) => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className={SC.basic}>
                    <div className={SC.subtitle}>Web猫ブログ</div>
                    <div
                        className={SC.description}
                        dangerouslySetInnerHTML={{ __html: blogProduct }}
                    />
                    <div className={SC.subtitle}>関連リンク</div>
                    <div className={SC.description}>
                        <ul>
                            {blogProductLinks.map(
                                (
                                    link:
                                        | {
                                              value: number
                                              text: string
                                              url: string
                                          }
                                        | any
                                ) => {
                                    return (
                                        <li key={link.value}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.text}
                                            </a>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                    <div className={SC.subtitle}>利用技術</div>
                    <div className={SC.description}>
                        <ul>
                            {blogUsedSkills.map((skill) => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className={SC.basic}>
                    登壇一覧
                    <div className={SC.description}>
                        <ul>
                            {talkProductLinks.map(
                                (
                                    product:
                                        | {
                                              value: number
                                              text: string
                                              url: string
                                          }
                                        | any
                                ) => {
                                    return (
                                        <li key={product.value}>
                                            <a href={product.url}>
                                                {product.text}
                                            </a>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
