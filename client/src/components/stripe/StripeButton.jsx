import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey ='pk_test_51H6VXtFqZRMoIdqogLJurLYcaNKBiD2jnolLSjgihVUENiBEOlC8BY7F7j1hqHfJxLLOOgGNzSqIN9xMBh1hPW9r00fxbMgeFW'	
    
		const onToken = token => {
			axios({
				url: 'payment',
				method: 'post',
				data: {
					amount: priceForStripe,
					token
				}
			}).then(response => {
				alert('Payment successful')
			})
			.catch(error => {
				console.log('Payment error' ,error);
				alert('There was an issue with your payment, please make sure you use the provided credit card')
			})
		}	 

    return(
      <StripeCheckout 
				lebel='Pay Now'
				name= 'crown Clothing pvt Ltd.co'
				billingAddress
				shippingAddress
				image='https://svgshare.com/i/CUz.svg'
				description={`Your total amount is $${ price }`}
				amount= {priceForStripe}
				panelLebel='Payment Infomation'
				token={onToken}
				stripeKey={publishableKey}
      />
    )
}

export default StripeCheckoutButton;