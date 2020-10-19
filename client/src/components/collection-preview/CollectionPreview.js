import React from 'react';
import CollectionItems from '../collection-items/CollectionItems';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';

const CollectionPreview = ({ title,items }) => {
  return (
		<CollectionPreviewContainer className='collection-preview'>
			<TitleContainer className='title' >{title.toUpperCase()}</TitleContainer>
			<PreviewContainer className='preview'>
			{items.filter((item, index) => index < 4).map((item) =>(
				<CollectionItems key={item.id} item={item} />
			))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	)
}

export default CollectionPreview;




