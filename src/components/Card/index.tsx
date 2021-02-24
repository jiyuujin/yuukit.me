import React, { FC, Fragment } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'
import LazyImage from '../LazyImage'
import Skills from '../Skills'
import { SiteMetadataTypes } from '../../types'
import { NekoButton } from 'nekohack-ui'
import PaperPlaneSvg from '../../static/icons/paper-plane.svg'

const Card: FC<any> = ({ data }: SiteMetadataTypes) => {
    const intl = useIntl()

    const position: string = data.position.split(',')[
        Math.floor(Math.random() * 3)
    ]

    return (
        <Fragment>
            <div className={SC.content}>
                <div className={SC.info}>
                    <LazyImage assetUrl={'me.png'} alt={'me'} />
                    <h1 className={SC.name}>
                        {data.author + ' (' + position + ')'}
                    </h1>
                    <Skills />
                    <p>
                        <NekoButton
                            onClick={() => {
                                const url =
                                    'https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform'
                                window.open(url, '_blank')
                            }}
                        >
                            {intl.formatMessage({ id: 'contact' })}
                            <PaperPlaneSvg
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '4px',
                                }}
                            />
                        </NekoButton>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Card
