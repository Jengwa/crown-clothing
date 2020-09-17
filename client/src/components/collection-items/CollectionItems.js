import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import {addItem} from '../../redux/cart/cart.action'


import './CollectionItems.scss';


const CollectionItems = ({ item , addItem}) => {
	const { name,price,imageUrl } = item;
	return (
		<div className='collection-items'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>{ name }</span>
				<span className= 'price'>{ price }</span>
			</div>
			<CustomButton className ='custom-button' onClick={() => addItem(item)} inverted > ADD TO CART </CustomButton>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItems);