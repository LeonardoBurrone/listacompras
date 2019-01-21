import { Types } from '../actions/form';

const initialState = {
  action: 'new',
  listToUpdate: null,
  productToUpdate: {},
}

export default function form(state=initialState, action) {
  switch(action.type) {
    case Types.FINISH_UPDATE:
      return {
        action: 'new',
        listToUpdate: null,
        productToUpdate: {}
      };

    case Types.START_UPDATE:
      return {
        action: 'update',
        listToUpdate: action.list,
        productToUpdate: action.product
      };
    
    default:
      return state;
  }
}