import React,{Profiler} from 'react';
import {HomeContainer} from './home-page.styles'
import Directory from '../../components/directory/Directory';

const HomePage = () => {
	return(
		<Profiler id='Directory' onRender={(id,phase,actualDuration) => {
			console.log({id,phase,actualDuration})
		}}>
			<HomeContainer>
				<h1>CROWN CLOTHING</h1>
				<Directory/>	
			</HomeContainer>
		</Profiler>	
	)
}

export default HomePage;