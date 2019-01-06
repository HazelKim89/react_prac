import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import MainComponents from './base/js/MainMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="display-2 text-left">Sketch World</h1>
          <Row>
            <Col className="d-none d-lg-block d-xl-block" xs="3">
              <MainComponents.MainMenu />
            </Col>
            <Col xs="12" lg="9" xl="9">
              <MainComponents.MainImgs />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

{/* <div className="conatainer">
<h1 className="display-2 text-left offset-sm-1">Sketch World</h1>
  <div className="row">
    <div className="col-3 d-none d-lg-block d-xl-block">
      <MainComponents.MainMenu />
    </div>
    <div className="col-12 col-lg-9 col-xl-9">
      <MainComponents.MainImgs />
    </div>
  </div>
</div> */}

export default App;
