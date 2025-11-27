import { combineReducers } from 'redux';
import productReducer from './Reducers';
import adminAuthReducer from './AdminAuthReducer';

const root = combineReducers({
  products: productReducer,
  adminAuth: adminAuthReducer,
});

export default root;