import React from 'react';
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Footer from "./components/Footer"
import SignUpForm from "./components/User/SignUpForm"
import Contact from "./components/FooterNavBar/Contact"
import About from "./components/FooterNavBar/About"
import FacebookLink from "./components/FooterNavBar/FacebookLink"
import Faq from "./components/FooterNavBar/Faq"
import Rules from "./components/FooterNavBar/Rules"
import Dashboard from "./components/User/Dashboard"
import { Switch, Route } from "react-router-dom"

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="mainDiv">
        <header>
          <h1>Glasses and Giggles</h1>
        </header>
        <Login />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/SignUp">
            <SignUpForm />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/FacebookLink">
            <FacebookLink />         
          </Route>
          <Route exact path="/Faq">
            <Faq />
          </Route>
          <Route exact path="/Rules">
            <Rules />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default App;