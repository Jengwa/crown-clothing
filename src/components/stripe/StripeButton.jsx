import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey ='pk_test_51H6VXtFqZRMoIdqogLJurLYcaNKBiD2jnolLSjgihVUENiBEOlC8BY7F7j1hqHfJxLLOOgGNzSqIN9xMBh1hPW9r00fxbMgeFW'	
    
		const onToken = token => {
			console.log(token)
			alert('Payment successful')
		}	 

    return(
      <StripeCheckout 
				lebel='Pay Now'
				name= 'crown Clothing pvt Ltd.co'
				billingAddress
				shippingAddress
				image='https://sendeyo.com/up/d/f3eb2117da'
				description={`Your total amount is $${ price }`}
				amount= {priceForStripe}
				panelLebel='Payment Infomation'
				token={onToken}
				stripeKey={publishableKey}
      />
    )
}

export default StripeCheckoutButton;