import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/FirebaseUtils';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './Header.scss'


const Header = ({ currentUser , hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo'/>
			</Link>	
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/shop' className='option'>
					CONTACT
				</Link>
				{
					currentUser ? 
					<div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
					:
					<Link to='/signin' className='option'> SIGN IN</Link>
				}
				<CartIcon />
			</div>
			{ 
				hidden ? null : <CartDropdown/>
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);