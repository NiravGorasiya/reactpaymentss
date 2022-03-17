import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import PamentForm from './PamentForm';
import { Elements } from '@stripe/react-stripe-js';

const PUBLIC_KEY = "pk_test_51IvdjGSBmFmiKlBdvjqb5Pb8TDJEkPZCy9yjdVTow4IC1RZWOQ0MnJJStkzWzZPyaU5p4h8ehxeR7njn5UdNWwet00pkZL315z"
const stripePromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <PamentForm />
        </Elements>
    )
}

export default StripeContainer