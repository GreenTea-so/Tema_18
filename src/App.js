import React, {Component} from "react"
import "./app.css"
import Header from "./components/header"
import Search from "./components/search"
import MyList from "./components/my_list"
import {Route, BrowserRouter, Switch} from "react-router-dom"
import { connect} from 'react-redux'
import { render } from "@testing-library/react"






class App extends Component {

  
  render() {
    console.log(this.props.testStore)
  return (

    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route path = "/search" component = {Search}/>
        <Route path = "/my-list" component = {MyList}/>
      </div>
    </BrowserRouter>


    
  );
}
}
export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
