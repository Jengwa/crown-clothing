import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItems from '../collection-items/CollectionItems';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';

const CollectionPreview = ({ title,items,history,match,routeName }) => {
  return (
		<CollectionPreviewContainer className='collection-preview'>
			<TitleContainer className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer className='preview'>
			{items.filter((item, index) => index < 4).map((item) =>(
				<CollectionItems key={item.id} item={item} />
			))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	)
}

export default withRouter(CollectionPreview);




