import React, { FC } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import * as SC from './index.module.scss'
import { Play } from '../Play'

type SlideProps = {
    data: Array<{
        text: string
        url: string
        youtubeUrl: string
        date: string
    }>
}

export const Slide: FC<SlideProps> = ({ data }) => {
    const dateFormat = (d: string) => {
        return dayjs(d).format('YYYY年MM月DD日')
    }

    return (
        <div className={SC.basic}>
            スライド一覧
            <div className={SC.subtitle}>登壇</div>
            <div className={SC.description}>
                <ul>
                    {data.map(({ node, index }: any) => {
                        return (
                            <li key={index}>
                                <div>{dateFormat(node.date)}</div>
                                <div className={SC.link}>
                                    <a href={node.url}>{node.text}</a>
                                    {node.youtubeUrl && (
                                        <a href={node.youtubeUrl}>
                                            <Play />
                                        </a>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

Slide.propTypes = {
    data: PropTypes.any.isRequired,
}
