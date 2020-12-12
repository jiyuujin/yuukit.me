import React, { FC } from 'react'
import dayjs from 'dayjs'
import * as SC from './index.module.scss'

type SlideProps = {
    data: Array<{
        text: string
        url: string
        youtubeUrl: string
        date: string
    }>
}

const Slide: FC<SlideProps> = ({ data }) => {
    const dateFormat = (d: string) => {
        return dayjs(new Date(d)).format('YYYY年MM月DD日')
    }

    return (
        <div className={SC.basic}>
            スライド一覧
            <div className={SC.subtitle}>登壇</div>
            <div className={SC.description}>
                <ul>
                    {data.map(({ node }: any) => {
                        return (
                            <li key={node.id}>
                                <div>{dateFormat(node.date)}</div>
                                <div className={SC.link}>
                                    <a href={node.url}>{node.text}</a>
                                </div>
                                {node.youtubeUrl && (
                                    <div className={SC.link}>
                                        <a href={node.youtubeUrl}>
                                            {node.youtubeUrl}
                                        </a>
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Slide
