import React, { FC, useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { NekoButton } from 'nekohack-ui'
import Modal from '../Modal'
import Card from '../Card'
import { SiteMetadataTypes } from '../../types'
import IdCardSvg from '../../static/icons/id-card.svg'

export const CardWrapper: FC<SiteMetadataTypes> = ({ data }) => {
    const intl = useIntl()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <NekoButton onClick={handleOpen}>
                <IdCardSvg
                    style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '4px',
                    }}
                />
                {intl.formatMessage({ id: 'online_business_card' })}
            </NekoButton>
            {open && (
                <Modal onClose={() => setOpen(!open)}>
                    <Card data={data} />
                </Modal>
            )}
        </>
    )
}
