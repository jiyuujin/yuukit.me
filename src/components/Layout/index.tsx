import React from 'react'
import './index.module.scss'
import '@nekohack/normalize.css/dist/index.css'

export default ({ children }: { children?: React.ReactNode }) => (
    <main>{children}</main>
)
