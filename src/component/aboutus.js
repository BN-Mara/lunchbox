import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/eating.jfif';
import bgdiv from '../img/imgdiv.jpg';

export default class Aboutus extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container fluid="md" className="pdtb-5">
                <Row>
                    <Col lg>
                        <Card>
                            
                        </Card>
                    
                    </Col>
                    <Col lg>
                    
                    </Col>
                </Row>

            </Container>
        );
    }
}