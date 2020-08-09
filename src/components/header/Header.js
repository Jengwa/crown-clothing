import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/FirebaseUtils';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { LogoContainer, OptionsContainer, HeaderContainer, OptionLink } from './header.styles'


const Header = ({ currentUser , hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/' >
				<Logo/>
			</LogoContainer>	
			<OptionsContainer >
				<OptionLink to='/shop' >
					SHOP
				</OptionLink>
				<OptionLink to='/shop' >
					CONTACT
				</OptionLink>
				{
					currentUser ? 
					<OptionLink as ='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
					:
					<OptionLink to='/signin'> SIGN IN</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{ 
				hidden ? null : <CartDropdown/>
			}
		</HeaderContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);