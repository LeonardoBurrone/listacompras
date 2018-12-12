import React from 'react';

import './home.css';
import NewList from './newlist';
import List from './list';

const Home = () => (
  <div className='page-container'>
    <NewList />
    <List />
  </div>
);

export default Home;