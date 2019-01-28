export const Types = {
  FINISH_UPDATE: 'form/FINISH_UPDATE',
  START_UPDATE: 'form/START_UPDATE',
  START_ADD: 'form/START_ADD',
  FINISH_ADD: 'form/FINISH_ADD',
}

export const Creators = {
  finishUpdate: () => ({
    type: Types.FINISH_UPDATE,
  }),

  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list,
  }),

  startAdd: list => ({
    type: Types.START_ADD,
    list,
  }),

  finishAdd: () => ({
    type: Types.FINISH_ADD,
  }),
}