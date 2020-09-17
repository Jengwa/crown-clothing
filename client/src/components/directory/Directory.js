import React from 'react';
import MenuItem from '../menu-items/MenuItem';
import './Directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
		<div className='directory-menu'>
			{
				sections.map(({id, ...otherSectionsProps}) => (
					<MenuItem key={id} {...otherSectionsProps}/>
				))
			}
		
		</div>
	)

	const mapStateToProps  = createStructuredSelector({
		sections: selectDirectorySections
	});

export default connect(mapStateToProps)(Directory);