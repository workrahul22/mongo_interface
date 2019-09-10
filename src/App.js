import React, { Component, Fragment } from 'react';
import {Container, Button} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header value="MongoDb Web Interface" />
        <Sidebar />
        <Footer value="MongoDb Footer" />
      </Fragment>
    );
  }
}

class Sidebar extends Component {

  render() {
    return (
      <p>Sidebar</p>
    )
  }
}
class Header extends Component {
  render(){
    return (
      <Container>
        <h1 align="center">{this.props.value}</h1>
      </Container>
      )
  }
}

class Footer extends Component {
  render(){
    const footerStyle = {
       position: "fixed",
       left: 0,
       bottom: 0,
       width: "100%",
       backgroundColor: "red",
       color: "white",
       textAlign: "center",
    }
    return (
      <div>
        <h1 align="center" style={footerStyle}>{this.props.value}</h1>
      </div>
      );
  }
}

export default App;
