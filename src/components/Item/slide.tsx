import React, { FC } from 'react'
import dayjs from 'dayjs'
import * as SC from './index.module.scss'
import { Play } from '../Play'
import { productLinks as talkProductLinks } from '../../utils/talk'

export const SlideList: FC = () => {
    const dateFormat = (d: string) => {
        return dayjs(d).format('YYYY年MM月DD日')
    }

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
                                    <div>
                                        {dateFormat(product.date)}
                                    </div>
                                    <div className={SC.link}>
                                        <a href={product.url}>
                                            {product.text}
                                        </a>
                                        {product.youtubeUrl && (
                                            <a href={product.youtubeUrl}>
                                                <Play />
                                            </a>
                                        )}
                                    </div>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}
