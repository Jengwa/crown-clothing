import React from 'react';
import MenuItem from '../menu-items/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory-styles';

const Directory = ({ sections }) => (
		<DirectoryMenuContainer className='directory-menu'>
			{
				sections.map(({id, ...otherSectionsProps}) => (
					<MenuItem key={id} {...otherSectionsProps}/>
				))
			}
		
		</DirectoryMenuContainer>
	)

	const mapStateToProps  = createStructuredSelector({
		sections: selectDirectorySections
	});

export default connect(mapStateToProps)(Directory);