import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ContributeSvg from '../../static/icons/contribute.svg'
import Modal from '../Modal'
import LazyImage from '../LazyImage'
import { NekoButton } from 'nekohack-ui'

export const Payment = () => {
    const isTest = false

    const stripeApiKey = isTest
        ? process.env.GATSBY_TEST_STRIPE_PUBLIC_KEY
        : process.env.GATSBY_LIVE_STRIPE_PUBLIC_KEY
    const stripePromise = loadStripe(stripeApiKey)

    return (
        <div style={{ padding: '4px 0' }}>
            <Elements stripe={stripePromise}>
                <CheckoutForm isTest={isTest} />
            </Elements>
        </div>
    )
}

type CheckoutFormType = {
    isTest: boolean
}

const CheckoutForm = ({ isTest }: CheckoutFormType) => {
    const intl = useIntl()

    const stripe = useStripe()

    const elements = useElements()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const res = await fetch(process.env.GATSBY_LIVE_LAMBDA_ENDPOINT, {
            method: 'post',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        const jsonData = JSON.parse(data.body)
        const secret = jsonData.charge.client_secret

        const card = elements?.getElement(CardElement)

        const result = await stripe?.confirmCardPayment(secret, {
            payment_method: {
                card: card!,
                billing_details: {
                    name: 'username',
                },
            },
        })

        if (result?.error) {
            // console.log(result?.error.message)
        } else {
            if (result?.paymentIntent?.status === 'succeeded') {
                alert('Charged successful!')
            }
        }
    }

    return (
        <StaticQuery
            query={query}
            render={(data) => (
                <>
                    <NekoButton onClick={handleOpen}>
                        <ContributeSvg
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '4px',
                            }}
                        />
                        {intl.formatMessage({ id: 'contribute' })}
                    </NekoButton>
                    {open && (
                        <Modal onClose={handleOpen}>
                            <form
                                className={SC.checkoutForm}
                                onSubmit={handleSubmit}
                            >
                                <LazyImage
                                    assetUrl={'contribute.png'}
                                    alt={'contribute'}
                                />
                                <label
                                    style={{
                                        width: '100%',
                                        padding: '12px 0',
                                    }}
                                >
                                    <CardElement
                                        options={{
                                            hidePostalCode: true,
                                        }}
                                    />
                                </label>
                                <button
                                    className={SC.checkoutButton}
                                    disabled={!stripe}
                                >
                                    {isTest
                                        ? intl.formatMessage({ id: 'test_pay' })
                                        : intl.formatMessage({ id: 'pay' })}
                                </button>
                            </form>
                        </Modal>
                    )}
                </>
            )}
        />
    )
}

export const query = graphql`
    query {
        contribute: file(relativePath: { eq: "contribute.png" }) {
            childImageSharp {
                fixed(width: 500) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
