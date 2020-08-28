import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionOverview from '../collections-overview/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoaded: selectIsCollectionFetching 
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)


export default CollectionOverviewContainer;
