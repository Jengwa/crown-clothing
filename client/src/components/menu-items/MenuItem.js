import React from 'react';
import { withRouter } from 'react-router-dom'
import { MenuItemContainer, BackgroundImageContainer,ContentContainer,ContentSubtitle,ContentTitle} from './menu-items.styles'

const MenuItem = ({title,imageUrl,size, history, linkUrl,match }) => {
    return(
        <MenuItemContainer size={size} onClick ={() => history.push(`${match.url}${linkUrl}`)}>  
			<BackgroundImageContainer className='background-image'
				imageUrl={imageUrl}
				/>	
			<ContentContainer >
				<ContentTitle className='title'>{ title.toUpperCase() }</ContentTitle>
				<ContentSubtitle className='subtitle'>Shop Now</ContentSubtitle>
			</ContentContainer>    
		</MenuItemContainer>
    )
}

export default withRouter(MenuItem);