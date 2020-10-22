import React, { FC, Fragment } from 'react'
import * as SC from './index.module.scss'
import { SiteMetadataTypes } from '../../types'
import { NekoButton } from 'nekohack-ui'

export const Card: FC<any> = ({ data }: SiteMetadataTypes) => {
    const positionList: string[] = data.position.split(',')

    const isSP = window.navigator.userAgent.match(/iPhone|Android.+Mobile/)

    return (
        <Fragment>
            {/*!isSP && (
                    <div className={SC.avatarPc}>
                        <img src={AvatarImg} />
                    </div>
                )*/}
            <div className={SC.content}>
                <div className={SC.info}>
                    <div className={SC.avatarSp} />
                    <h1 className={SC.name}>{data.author}</h1>
                    <div>
                        <ul>
                            {positionList.map((p: string) => {
                                return <li key={p}>{p}</li>
                            })}
                        </ul>
                    </div>
                    <p className={SC.location}>
                        Your Location - {data.lonlat}
                    </p>
                    <p className={SC.description}>
                        {data.description}
                    </p>
                    <p>
                        <NekoButton
                            onClick={() =>
                                (location.href =
                                    'https://webneko.dev/contact')
                            }
                        >
                            Contact In Touch
                        </NekoButton>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}
