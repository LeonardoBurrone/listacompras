import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import CustomCard from '../common/customCard';
import ListItemFooter from './listItemFooter';

const ListItem = () => (
  <CustomCard
    link='#'
    image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/200px-A_small_cup_of_coffee.JPG'
    containerClass='list-item'
    footer={<ListItemFooter />}
  >
    <div>
      <div className='list-item-header'>
        <Typography variant='subtitle1' component='h2'>Café</Typography>
        <Checkbox />
      </div>
      <div>
        <Typography component='p'>1 Unidade</Typography>
        <Typography component='p'>R$ 10.00</Typography>
      </div>
    </div>
  </CustomCard>
);

export default ListItem;