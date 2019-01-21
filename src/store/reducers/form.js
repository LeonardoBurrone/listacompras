import { Types } from '../actions/form';

const initialState = {
  action: 'new',
  productToUpdate: {},
}

export default function form(state=initialState, action) {
  switch(action.type) {
    case Types.FINISH_UPDATE:
      return {
        action: 'new',
        productToUpdate: {}
      };

    case Types.START_UPDATE:
      return {
        action: 'update',
        productToUpdate: action.product
      };
    
    default:
      return state;
  }
}