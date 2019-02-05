export const Types = {
  ADD_PRODUCT: 'list/ADD_PRODUCT',
  DELETE_PRODUCT: 'list/DELETE_PRODUCT',
  GET_IMAGE_ERROR: 'list/GET_IMAGE_ERROR',
  GET_IMAGE_SUCCESS: 'list/GET_IMAGE_SUCCESS',
  NEW_LIST: 'list/NEW_LIST',
  TOGGLE_PRODUCT: 'list/TOGGLE_PRODUCT',
  UPDATE_PRODUCT: 'list/UPDATE_PRODUCT',
}

export const Creators = {
  addProduct: (product, list) => ({
    type: Types.ADD_PRODUCT,
    product,
    list,
  }),

  deleteProduct: productId => ({
    type: Types.DELETE_PRODUCT,
    productId,
  }),

  getImageError: (product, img) => ({
    type: Types.GET_IMAGE_ERROR,
    product,
    img,
  }),

  getImageSuccess: (product, img) => ({
    type: Types.GET_IMAGE_SUCCESS,
    product,
    img,
  }),

  newList: () => ({
    type: Types.NEW_LIST,
  }),

  toggleProduct: productId => ({
    type: Types.TOGGLE_PRODUCT,
    productId,
  }),

  updateProduct: (product, list) => ({
    type: Types.UPDATE_PRODUCT,
    product,
    list,
  }),
}
