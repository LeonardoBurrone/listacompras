import React from 'react';

import CustomCard from '../common/customCard';

const NewList = () => (
  <CustomCard containerClass='new-list-container' link='/lista' >
    <div>
      <p className='title'>Adicionar Novas Listas</p>
    </div>
  </CustomCard>
);

export default NewList;