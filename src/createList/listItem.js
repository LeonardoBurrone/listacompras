import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import CustomCard from '../common/customCard';
import ListItemFooter from './listItemFooter';

const ListItem = ({item, deleteProduct}) => (
  <CustomCard
    link='#'
    image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/200px-A_small_cup_of_coffee.JPG'
    containerClass='list-item'
    footer={<ListItemFooter deleteProduct={deleteProduct} item={item} />}
  >
    <div>
      <div className='list-item-header'>
        <Typography variant='subtitle1' component='h2'>{item.product}</Typography>
        <Checkbox />
      </div>
      <div>
        <Typography component='p'>{item.quantity} {item.unit}</Typography>
        <Typography component='p'>R$ {item.price}</Typography>
      </div>
    </div>
  </CustomCard>
);

export default ListItem;