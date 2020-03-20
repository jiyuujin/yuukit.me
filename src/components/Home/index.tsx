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
            </div>
        </div>
    )
}
