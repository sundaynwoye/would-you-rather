import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIntialData())
  }

  render() {
    return (
        <div className="App">
          Start
        </div>
    )
  }
}

export default connect()(App);
