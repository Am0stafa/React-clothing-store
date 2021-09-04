import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutBtn = ({price}) => {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_51JW2XtCQRK82ku3bv3UJUcIfU3kA7JVmropnsyMrU5qSNAOYwI40MiqS9dPbA7kmMhO1mG9CnqTe5xHw6EztKCvu00Lb05EYwa';
const onToken = (tocken) => {
console.log(tocken)
alert('Payment done')
}
    return (
       <StripeCheckout
       label='Pay now'
       name='Clothing-store'
       billingAddress
       shippingAddress
       description={`Your total price is ${price}`}
       amount={priceForStripe}
       panelLabel='Pay now'
       token={onToken}
       stripeKey={publishableKey}
       />
    )
}

export default StripeCheckoutBtn
