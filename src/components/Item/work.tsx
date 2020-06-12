import React, { FC } from 'react'
import * as SC from '../Work/index.module.scss'

export const Work: FC = () => {
    return (
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
    )
}
