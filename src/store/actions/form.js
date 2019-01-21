export const Types = {
  FINISH_UPDATE: 'form/FINISH_UPDATE',
  START_UPDATE: 'form/START_UPDATE',
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
} 