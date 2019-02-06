import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './home.css';
import NewList from './newList';
import List from './list';
import { getListTotal, getOpenedItems, getClosedItems } from '../store/reducers/list';
import { Creators as ListActions} from '../store/actions/list';

const Home = (props) => (
  <div className='page-container home-image'>
    <NewList newList={props.newList}/>
    {props.list.items.length > 0 &&
      <List
        list={props.list.list}
        closedItems={props.closedItems}
        openedItems={props.openedItems}
        total={props.total}
      />}
  </div>
);

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
