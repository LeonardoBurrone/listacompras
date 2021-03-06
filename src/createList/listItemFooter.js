import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FormActions } from '../store/actions/form';

const ListItemFooter = (props) => (
  <div className='list-item-footer'>
    <div className='list-card-footer-actions'>
    <FontAwesomeIcon
      icon={faPen}
      color='#00b0ff'
      size='1x'
      onClick={() => props.startUpdate(props.list, props.item)}
    />
    <FontAwesomeIcon
      icon={faTrash}
      color='#e91e63'
      size='1x'
      onClick={() => props.deleteProduct(props.item.id)}
    />
    </div>
    <p>Total: R$ {props.item.total}</p>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(ListItemFooter);