import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'


//import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartIconContainer, ShoppingIconContainer, SpanContainer } from './cart-icon-styles'



const CartIcon = ({toggleCartHidden, itemCount }) => {
	return (
		<CartIconContainer onClick={toggleCartHidden}>
			<ShoppingIconContainer/>
			<SpanContainer>{itemCount}</SpanContainer>
	   </CartIconContainer>
	)

};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps  = createStructuredSelector({
	itemCount: selectCartItemsCount
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


