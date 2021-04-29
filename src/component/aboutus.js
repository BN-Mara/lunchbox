import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/imglogo.jpg';
import bgdiv from '../img/imgdiv.jpg';

export default class Aboutus extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="bg-white fluid shadow rounded">
            <Container fluid="md" className="pdtb-5 ">
                <Row>
                    <Col lg>
                        <div className="bgdark roundel" >
                            <div style={{paddingLeft:"5rem",paddingRight:"5rem"}}>
                            <Image src={imgt} className="roundel" style={{width:380,height:480}}/>
                            </div>

                        </div>
                    
                    </Col>
                    <Col lg>
                        <h2>About</h2>
                        <p className="abouttxt">
                        We solve the food problem among students by providing
a pre-paid meal subscription packages that will enable
students to easily access meals per month or semester
according to the package subscribedLunch box is using
an innovative technology to solve the food problem
among students by providing a pre-paid meal
subscription packages that will enable students to easily
access meals per month or semester according to the
package subscribed. Our company the Lunch Box will
help the students to overcome the food problem through
our pre-paid meals throughout the month or semester
depending on our different meal packages. Through our
business model Lunch Box will partner with restaurants
and hotels in Tanzania so as to ensure easy food
accessibility to our customers.
                        </p>
                    <Button variant="danger" size="lg">Read more</Button>
                    </Col>
                </Row>

            </Container>
            </div>
        );
    }
}