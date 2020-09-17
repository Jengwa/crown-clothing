import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './CheckoutPage.scss';
import StripeCheckoutButton from '../../components/stripe/StripeButton';


const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-blocks'>
				<span>Product</span>
			</div>
			<div className='header-blocks'>
				<span>Description</span>
			</div>
			<div className='header-blocks'>
				<span>Quantity</span>
			</div>
			<div className='header-blocks'>
				<span>Price</span>
			</div>
			<div className='header-blocks'>
				<span>Remove</span>
			</div>	
		</div>
		 {
			 cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem}/>
			 ))
		 }

		 <div className='total'>
		 	<span className='total-money'> Total : ${`${total}`}</span>
		 </div>
		 <div className= "test-warning">
			 * Please use the following test credit card for payments *
			 <br />
			 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		 </div>
		 <StripeCheckoutButton price={total} />
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total:selectCartTotal 
})
	


export default connect(mapStateToProps)(CheckoutPage);