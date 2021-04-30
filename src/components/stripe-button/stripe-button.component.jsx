import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe= price*100;
    const publishableKey= 'pk_test_51Ilw68SHXbs5a1D7sBdby5dRjEBfDe8MqKXLeuXzAkmApQXElQ2KdaOgKOEZoxkPBEVmtPTqOp3H7s6mamJSRThC00lkxTmX2G';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;