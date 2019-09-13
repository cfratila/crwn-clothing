import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_GuafIwdDerUvbInhEtClkOaR001K6CLg1n';

  const onToken = token => {
    axios.post('/payment', {
      amount: priceForStripe,
      token
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error', JSON.parse(error));
      alert('There was an error with your payment. Please make sure you use the provided credit card.');
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
