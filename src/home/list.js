import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './list.css';
import CustomCard from '../common/customCard';
import ListFooter from './listFooter';
import ListItem from './listItem';

const List = (props) => (
  <CustomCard
    containerClass='list-container'
    footer={<ListFooter total={props.total} />}
    link='/lista'
  >
    <div>
      <p className='title'>{props.list}</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text={`${props.openedItems} Item(s) Restante`} />
        <ListItem icon={faCheck} text={`${props.closedItems} Item(s) Comprados`} />
      </div>
    </div>
  </CustomCard>
);

export default List;