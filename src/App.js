
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//class based component
export default class App extends Component {
  c = "John";
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize="5" country="in" category="sports"/>
      </div>
    )
  }
}
