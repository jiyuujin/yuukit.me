import React, { FC } from 'react'
import * as SC from './index.module.scss'
import { Work } from '../Item/work'
import { ProductList, ProductDescription } from '../Item/product'
import { SlideList } from '../Item/slide'

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
                <Work />
                <ProductList />
                <ProductDescription />
                <SlideList />
            </div>
        </div>
    )
}
