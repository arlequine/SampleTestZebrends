import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Repos from './components/Repos';
import Users from './components/Users';
import './App.scss';

class App extends React.Component{
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
                <Link to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
              </Navbar.Brand>
              <Nav href="/">
                <Link to="Repos">Repositorios</Link>
                <Link to="Users">Usuarios</Link>
              </Nav>
            </Navbar>
            <Route exact path='/Repos' component={Repos}></Route>
            <Route exact path='/Users' component={Users}></Route>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
