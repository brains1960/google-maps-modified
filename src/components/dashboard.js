import React, { Component } from 'react';
import { Alert, Row, Well } from 'react-bootstrap';

class Dashboard extends Component {

  render() {
    return (
      <Well>
        <h1>Dashboard</h1>
        <div style={{ marginTop: 20, padding: 20}}>
          <Row style={{display: "flex"}}>
              <Alert bsStyle="success" style={{display: "flex", flex: 1, alignItems: "center"}}>
                <p className="col-xs-10">Correct Predictions</p>
                <p className="pred-num col-xs-2">239</p>
              </Alert>
              <Alert bsStyle="danger" style={{display: "flex", flex: 1, alignItems: "center", marginLeft: 20}}>
                <p className="col-xs-10">Wrong Predictions</p>
                <p className="pred-num col-xs-2">239</p>
              </Alert>
          </Row>
          <Row style={{display: "flex"}}>
            <Alert bsStyle="warning" style={{display: "flex", flex: 1, alignItems: "center"}}>
              <p className="col-xs-10">Pending Predictions</p>
              <p className="pred-num col-xs-2">239</p>
            </Alert>
            <Alert style={{display: "flex", flex: 1, alignItems: "center", marginLeft: 20}}>
              <p className="col-xs-10">Total Predictions</p>
              <p className="pred-num col-xs-2">239</p>
            </Alert>
          </Row>
        </div>
        <a >View all Predictions</a>
      </Well>
    )
  }
}

export default Dashboard;
