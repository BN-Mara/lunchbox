import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/eating.jpg';
import bgdiv from '../img/imgdiv.jpg';



export default class Restaurant extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(

            <Container fluid className="shadow bg-white rounded">
                <div className="marge ">
                
                <div class="d-flex justify-content-center">
                <h2 className="center margett">OUR RESTAURANTS</h2>
                </div>
                                                
                    <Row>
                        <Col lg>
                        <Card style={{ width: '20rem' }}>
                        <Image src={imgt}/>
                        </Card>
                        <spam>Mama Eva Restaurant</spam>
                        <br/>
                        Nyamalango<br/>
                        <Button variant="outline-dark">BOOK NOW</Button>
                        </Col>
                        <Col lg>
                        <Card style={{ width: '20rem' }}>
                        <Image src={imgt}/>
                        </Card>
                        <spam>Mama Eva Restaurant</spam>
                        <br/>
                        Nyamalango<br/>
                        <Button variant="outline-dark">BOOK NOW</Button>
                        </Col>
                        <Col lg>
                        <Card style={{ width: '20rem' }}>
                        <Image src={imgt}/>
                        </Card>
                        <spam>Mama Eva Restaurant</spam>
                        <br/>
                        Nyamalango<br/>
                        <Button variant="outline-dark">BOOK NOW</Button>
                        </Col>
                        <Col lg>
                        <Card style={{ width: '20rem' }}>
                        <Image src={imgt}/>
                        </Card>
                        <spam>Mama Eva Restaurant</spam>
                        <br/>
                        Nyamalango<br/>
                        <Button variant="outline-dark">BOOK NOW</Button>
                        </Col>
                    </Row>
                    
                    <div class="d-flex justify-content-center margett margelast">
                        <Button variant="danger">SEE MORE</Button>
                    </div>

                </div>

                </Container>
        );
    }
}