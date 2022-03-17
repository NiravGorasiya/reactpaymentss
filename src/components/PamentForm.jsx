import React, { useState } from 'react'
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from "axios"

const CARD_OPTIONS = {
    iconStyle: 'solid'
}

const PamentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000,
                    id
                })

                if (response) {
                    console.log(response, "response")
                    console.log("success full payment");
                    setSuccess(true)
                }
            } catch (error) {
                console.log("error", error);
            }
        } else {
            console.log("Error", error);
        }
    };

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup"></fieldset>
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>payment successfull </h2>
                </div>
            }
        </>
    )
}

export default PamentForm