import React, { FC } from 'react'
import { applyPolyfills, defineCustomElements } from '@nekohack/tiny-components/loader'

export const CookieFooterWrapper: FC = () => {
    applyPolyfills().then(() => {
        defineCustomElements()
    })

    return (
        <>
            {/*@ts-ignore*/}
            <cookie-footer
                name="yuukit-me-profile-site"
                title="あなたがこのサイト上でベストな体験ができるようCookieを使用しています"
                url="https://nekohack-privacy-policy.netlify.app"
            />
        </>
    )
}
