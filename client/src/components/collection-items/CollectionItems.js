import React from 'react';
import { connect } from 'react-redux';

import {addItem} from '../../redux/cart/cart.action'


import 
{ 	 AddButton,
	 CollectionContainer,
	  ImageContainer, 
	  FooterContainer, 
	  NameContainer, 
	  PriceContainer } 
from './collection-items.styles';


const CollectionItems = ({ item , addItem}) => {
	const { name,price,imageUrl } = item;
	return (
		<CollectionContainer className='collection-items'>
			<ImageContainer
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<FooterContainer className='collection-footer'>
				<NameContainer className='name'>{ name }</NameContainer>
				<PriceContainer className= 'price'> ${ price }</PriceContainer>
			</FooterContainer>
			<AddButton className ='custom-button' onClick={() => addItem(item)} inverted > ADD TO CART </AddButton>
		</CollectionContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItems);