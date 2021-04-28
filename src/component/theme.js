import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';


export default class Theme extends Component{
    constructor(props)
    {
        super(props);

    }
    render()
    {
        return(
            <>
            <div className="marge">
            <Container fluid>
               <Row>
                   <Col lg={4}>
                   <p></p>
                       <p>
                           <h1>LOGO</h1>
                       </p>
                       <p></p>
                       <div className="pdtop">
                       <h2 className="colorred">Discover your taste</h2>
                       
                       <spam className="bigtext">Enjoy your Delicious food</spam>
                       <p className="ptxt" style={{paddingRight:"7rem"}}>
                       We solve the food problem among students
by providing a pre-paid meal subscription
packages that will enable students to easily
access meals per month or semester
according to the package subscribed

                       </p>
                       <Button href="#" variant="danger" size="lg">Contact us</Button>

                   </div>
                   </Col>
                   <Col lg={8}>
                       <div style={{backgroundImage: `url(${bgimg})`, height:"100%"}}>

                       
                   <Nav
                        activeKey="/home"
                         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                     <Nav.Link href="/home" className="white">home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                    <Nav.Link eventKey="about" className="white">About us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                    <Nav.Link eventKey="contact" className="white">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                    <Nav.Link eventKey="restaurant" className="white">Restaurant</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="#" variant="outline-danger">Sign in</Button>                
                    </Nav.Item>
                    &nbsp; 
                        <Nav.Item>
                            <Button href="#" variant="danger">Sign up</Button>
                 
                    </Nav.Item>

                    </Nav>
                      
                           </div>
                   </Col>
               </Row>
  

            </Container>
            </div>
            <Container fluid className="bggrey">
                <div className="marge">

                </div>

                </Container>
            </>

        );
    }
}