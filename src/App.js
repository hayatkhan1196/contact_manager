import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Notfound from "./component/Notfound";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Adduser from "./component/AddUser/adduser";
import Edit from "./component/AddUser/Edit";
import View from "./component/AddUser/View";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>hayat khan</h1> */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/AddUser" component={Adduser}></Route>
          <Route path="/Edit/:id" component={Edit}></Route>
          <Route path="/View/:id" component={View}></Route>

          <Route component={Notfound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
