import React,{ useEffect, lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/Spinner';

const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionsOverview.container'))
const CollectionContainer = lazy(() => import('../collection/CollectionContainer'))

const ShopPage = ({fetchCollectionsStart, match}) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])
  
    return  (
      <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
          <Route exact path={`${match.path}`} 
          component={CollectionOverviewContainer}
          />
          <Route path={`${match.path}/:collectionId`}
            component= {CollectionContainer}
          />
        </Suspense>
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
  null, 
  mapDispatchToProps
  )(ShopPage);
  