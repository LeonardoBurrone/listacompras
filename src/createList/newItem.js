import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Creator as FormActions } from '../store/actions/form';
import CustomCard from '../common/customCard';

const NewItem = (props) => (
  <CustomCard link='#' containerClass='list-item'>
    <p className='title'>Novo Produto</p>
    <FontAwesomeIcon icon={faPlusCircle} color='#E4E4E4' size='8x' />
  </CustomCard>
)

export default NewItem;