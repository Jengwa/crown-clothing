import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/FirebaseUtils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START 
})

export const fetchCollectionsSuccess = collectionsMap =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage
})

export const fetchCollectionsStartAysnc = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart())

    collectionRef.get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      
      
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}