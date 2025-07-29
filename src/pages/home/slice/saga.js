import {call , takeLatest, put} from 'redux-saga/effects';
import { actions } from './slice';
import { createCard } from '../../../services/api';

function* fetchProducts() { 
    try {
        const result = yield call(fetchProducts);
        yield put({
            type: actions.getProductsSuccess.type,
            payload: result.data,
        });
    } catch (error) {
        yield put({ type: actions.getProductsFailure.type, error });
    }
}

function* addProductToCards(action) {
    
    try {
        const result = yield call(createCard,action.payload);
        yield put({
            type: actions.addProductToCardsSuccess.type,
            payload: result.data,
        });
    } catch (error) {
        yield put({ type: actions.addProductToCardsFailure.type, error });
    }
}
// function* addProduct(action) {
//     try {
//         const result = yield call(axios.post,"http://localhost:5000/api/post", action.payload);
//         yield put({
//             type: actions.addProductSuccess.type,
//             payload: result.data,
//         });
//     } catch (error) {
//         yield put({ type: actions.addProductFailure.type, error });
//     }
// }
 
const ProductSaga = [
    takeLatest(actions.getProducts.type, fetchProducts),
    takeLatest(actions.addProductToCards.type, addProductToCards),
    // takeLatest(actions.addProduct.type, addProduct),
]

export default ProductSaga;