import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap'
import '../css/MainMenu.css'
import main1 from '../../images/main2.jpg'
import main2 from '../../images/main7.jpg'
import main3 from '../../images/main3.jpg'


class MainMenu extends React.Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem tag="a" href="#">Main</ListGroupItem>
                <ListGroupItem tag="a" href="#">About</ListGroupItem>
                <ListGroupItem tag="a" href="#">Daily Sketch</ListGroupItem>
                <ListGroupItem tag="a" href="#">Gallery</ListGroupItem>
                <ListGroupItem tag="a" href="#">Comment</ListGroupItem>
                <ListGroupItem tag="a" href="#">Sources</ListGroupItem>
            </ListGroup>
        )
    }
}

class MainImgs extends React.Component {
    render() {
        return (
            <Row>
                <Col xs="12" s="4" m="4" lg="4" xl="4">
                  <img src={main1} className="img-fluid" alt="main1"></img>
                </Col>
                
                <Col className="d-none d-lg-block col-lg-4 col-xl-4" s="4" m="4" lg="4" xl="4">
                  <img src={main2} className="img-fluid" alt="main2"></img>
                </Col>
                <Col className="d-none d-lg-block col-lg-4 col-xl-4" s="4" m="4" lg="4" xl="4">
                  <img src={main3} className="img-fluid" alt="main3"></img>
                </Col>
            </Row>
        )
    }
}

const MainComponents = { MainMenu, MainImgs }

export default MainComponents