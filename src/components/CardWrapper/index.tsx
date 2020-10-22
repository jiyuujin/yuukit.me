import React, { FC, useState } from 'react'
import { NekoButton } from 'nekohack-ui'
import { Modal } from '../Modal'
import { Card } from '../Card'
import { SiteMetadataTypes } from '../../types'

export const CardWrapper: FC<SiteMetadataTypes> = ({ data }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <NekoButton onClick={handleOpen}>オンライン名刺</NekoButton>
            {open && (
                <Modal onClose={() => setOpen(!open)}>
                    <Card data={data} />
                </Modal>
            )}
        </>
    )
}
