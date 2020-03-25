import React, { FC } from 'react'
import * as SC from './index.module.scss'

export const Home: FC = () => {
    return (
        <div className={SC.top}>
            <div className={SC.wrapper}>
                <div className={SC.title}>
                    Web Developer
                    <div className={SC.name}>Yuma Kitamura</div>
                    <div className={SC.locale}>Osaka, Kyoto (Japan)</div>
                </div>
                <div className={SC.social}>
                    <div className={SC.item}>
                        <a
                            href="https://webneko.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            blog
                        </a>
                    </div>
                    <div className={SC.item}>
                        <a
                            href="https://twitter.com/jiyuujinlab"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            twitter
                        </a>
                    </div>
                </div>
                <div className={SC.basic}>
                    基本情報
                    <div className={SC.description}>
                        ネット上では 自由人、jiyuujin と名乗って生息しています。誕生日は1988年11月04日。大阪府豊中市生まれ。性別は男性。現在は関西圏（京都や大阪）を中心に活動しています。
                    </div>
                    <div className={SC.subtitle}>
                        職業一覧
                    </div>
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
                    <div className={SC.subtitle}>
                        関連リンク一覧
                    </div>
                    <div className={SC.description}>
                        <ul>
                            <li>
                                <a href="https://github.com/jiyuujin/Curriculum-Vitae">
                                    職務経歴書
                                </a>
                            </li>
                            <li>
                                <a href="https://scrapbox.io/nekohack/skillset">
                                    スキルセット
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
