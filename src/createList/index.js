import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './list.css';
import Form from './form';
import ListItem from './listItem';
import { Creators as ListActions } from '../store/actions/list';
import NewItem from './newItem';

class CreateList extends Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }

  render() {
    return (
      <div className='page-container'>
        <Form
          addProduct={this.addProduct}
          updateProduct={this.props.updateProduct}
          url={this.props.match.params.action}
        />

        <div className='list-items-container'>
          {
            this.props.list.items.map(item =>
              <ListItem
                key={item.id}
                deleteProduct={this.props.deleteProduct}
                list={this.props.list.list}
                toggleProduct={this.props.toggleProduct}
                item={item} 
              />
            )
          }

          {
            this.props.match.params.action === 'edicao' &&
            <NewItem list={this.props.list.list} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);