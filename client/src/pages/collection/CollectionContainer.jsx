import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors.js';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
   connect(mapStateToProps),
   WithSpinner

)(CollectionPage)

export default CollectionContainer;