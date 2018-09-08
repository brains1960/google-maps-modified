import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Login extends Component {

  render() {
    return (
      <Jumbotron style={{ paddingLeft: 30, height: 100}}>
        <h1>Predictions</h1>
        <p>
          Do you think you're always right? Are you a good guesser? Prove it. Record those predictions and see if they come true
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
          <Button bsStyle="primary">Login</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default Login;
