import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

//react router is imported here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//class based component
export default class App extends Component {
  pageSize = 5;
  // state = {
  //   progress: 0
  // }
  // setProgress(progress){
  //   this.setState({progress: progress})
  // }
  //we will pass setProgress to News component
  // so that we can set progress through news component
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <LoadingBar
              color="#f11946"
              progress={this.setState.progress}
             
            />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News  
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News  
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News 
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News  
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News 
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News  
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News  
                  key="sports"
                  pageSize={12}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News  
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
