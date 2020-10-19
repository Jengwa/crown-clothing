import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.action';

import { LogoContainer, OptionsContainer, HeaderContainer, OptionLink } from './header.styles'


const Header = ({ currentUser , hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/' >
				<Logo/>
			</LogoContainer>	
			<OptionsContainer >
				<OptionLink to='/shop' >
					SHOP
				</OptionLink>
				<OptionLink to='/contacts' >
					CONTACT
				</OptionLink>
				{
					currentUser ? 
					(<OptionLink to='/signin' as ='div' onClick={signOutStart}> SIGN OUT</OptionLink>
					):(
					<OptionLink to='/signin'> SIGN IN</OptionLink>
					)
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

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);