import React from 'react';
import {HomeContainer} from './home-page.styles'
import Directory from '../../components/directory/Directory';

const HomePage = () => {
	return(
			
			<HomeContainer>
			<h1>CROWN CLOTHING</h1>
				<Directory/>	
			</HomeContainer>

	)
}

export default HomePage;