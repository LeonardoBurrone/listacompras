import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './list.css';
import CustomCard from '../common/customCard';
import ListFooter from './listFooter';
import ListItem from './listItem';

const List = (props) => (
  <CustomCard
    containerClass='list-container'
    footer={<ListFooter  date={props.date} total={props.total} />}
    link='/lista/edicao'
    cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list'}
  >
    <div>
      <p className='title'>{props.list}</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text={`${props.openedItems} Item(s) Restantes`} />
        <ListItem icon={faCheck} text={`${props.closedItems} Item(s) Comprados`} />
      </div>
    </div>
  </CustomCard>
);

export default List;