import { call, put } from 'redux-saga/effects';
import { services } from '../services';
import { Creators as ListActions } from '../actions/list';

const genericImg = 'https://dumielauxepices.net/sites/default/files/red-cross-mark-clipart-shop-736670-9436142.png';

export function* getImageRequest(action) {
  try {
    const img = yield call(services.getImages, action.product.product);
    yield put(ListActions.getImageSuccess(action.product, img));
  } catch(err) {
    console.log(err);
    yield put(ListActions.getImageError(action.product, genericImg));
  }
}