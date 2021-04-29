import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/eating.jfif';
import bgdiv from '../img/imgdiv.jpg';



export default class Pricing extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(

            <div className="bgdark">

            <div className="marge margetb">
            <div class="">
            
                <p style={{textAlign:"center"}}>
                <h2 className="white">OUR PRICING</h2>
                </p>
                
                <p className="white" style={{textAlign:"center"}}><b>Pick from 7 different packages</b><br/>
                Straight forward services, transparent pricing.<br/>
                No hidden cost .No extra fees</p>
            </div>
                <Row >
                    <Col lg>
                <Card >
                <Card.Header>
                <Card.Title>Basic</Card.Title>

                </Card.Header>
                    <Card.Body>
                    
                <Card.Text>
                     <h2>Twice per day</h2>
                     <p>
                         Breakfast or lunch
                     </p>
                     <p>
                         Lunch or dinner
                     </p>
                     <h1>
                         Tsh 2500
                         </h1>
            </Card.Text>
            <Button variant="danger" size="sm">Book Now</Button>
            </Card.Body>
            </Card>

                    </Col>
                    <Col lg>
                    <Card >
                <Card.Header>
                <Card.Title>Basic</Card.Title>

                </Card.Header>
                    <Card.Body>
                    
                <Card.Text>
                     <h2>Twice per day</h2>
                     <p>
                         Breakfast or lunch
                     </p>
                     <p>
                         Lunch or dinner
                     </p>
                     <h1>
                         Tsh 2500
                         </h1>
            </Card.Text>
            <Button variant="danger" size="sm">Book Now</Button>
            </Card.Body>
            </Card>
                    </Col>
                    
                    <Col lg>
                    <Card >
                <Card.Header>
                <Card.Title>Best</Card.Title>

                </Card.Header>
                    <Card.Body>
                    
                <Card.Text>
                     <h2>Twice per day</h2>
                     <p>
                         Breakfast or lunch
                     </p>
                     <p>
                         Lunch or dinner
                     </p>
                     <h1>
                         Tsh 2500
                         </h1>
            </Card.Text>
            <Button variant="danger" size="sm">Book Now</Button>
            </Card.Body>
            </Card>
                    </Col>
                    <Col lg>
                        
                    <Card >
                <Card.Header>
                <Card.Title>Basic</Card.Title>

                </Card.Header>
                    <Card.Body>
                    
                <Card.Text>
                     <h2>Twice per day</h2>
                     <p>
                         Breakfast or lunch
                     </p>
                     <p>
                         Lunch or dinner
                     </p>
                     <h1>
                         Tsh 2500
                         </h1>
            </Card.Text>
            <Button variant="danger" size="sm">Book Now</Button>
            </Card.Body>
            </Card>
            
                    </Col>
                    <Col lg>
                    <Card >
                <Card.Header>
                <Card.Title>Basic</Card.Title>

                </Card.Header>
                    <Card.Body>
                    
                <Card.Text>
                     <h2>Twice per day</h2>
                     <p>
                         Breakfast or lunch
                     </p>
                     <p>
                         Lunch or dinner
                     </p>
                     <h1>
                         Tsh 2500
                         </h1>
            </Card.Text>
            <Button variant="danger" size="sm">Book Now</Button>
            </Card.Body>
            </Card>
                    </Col>
                </Row>
            </div>

        </div>

        );
    }
}