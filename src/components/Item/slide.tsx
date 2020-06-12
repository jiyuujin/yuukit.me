import React, { FC } from 'react'
import * as SC from './index.module.scss'
import { productLinks as talkProductLinks } from '../../utils/talk'

export const SlideList: FC = () => {
    return (
        <div className={SC.basic}>
            スライド一覧
            <div className={SC.subtitle}>登壇</div>
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
    )
}
