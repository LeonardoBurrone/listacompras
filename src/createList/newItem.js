import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Creators as FormActions } from '../store/actions/form';
import CustomCard from '../common/customCard';

const NewItem = (props) => (
  <CustomCard link='#' containerClass='list-item' action={() => props.startAdd(props.list)}>
    <div className='new-item'>
      <p className='title'>Novo Produto</p>
      <FontAwesomeIcon icon={faPlusCircle} color='#E4E4E4' size='8x' />
    </div>
  </CustomCard>
);

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(NewItem);