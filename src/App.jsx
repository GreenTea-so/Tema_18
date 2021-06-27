import React from 'react';
import './app.css';
import './style/view.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header';
import Search from './components/search';
import MyList from './components/my_list';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route path="/search" component={Search} />
      <Route path="/my-list" component={MyList} />
    </div>
  </BrowserRouter>
);

export default connect(
  (state) => ({
    testStore: state,
  }),
)(App);
