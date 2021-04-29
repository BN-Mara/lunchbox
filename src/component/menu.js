import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/imglogo.jpg';
import bgdiv from '../img/imgdiv.jpg';
import eating from '../img/eating.jpg'

export default class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="bg-white fluid shadow rounded">
            <div className="marge pdtb-5 ">
            <p style={{textAlign:"center"}}>
                <h2 className="dark margebt2"><b>Menu</b></h2>
                </p>
                <Row>
                    <Col lg>
                        <Image src={eating} style={{width:300,height:300}}/>
                        <br/>
                        Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                    <Col lg>
                    <Image src={eating} style={{width:300,height:300}}/>
                    <br/>
                    Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                    <Col lg>
                    <Image src={eating} style={{width:300,height:300}}/>
                    <br/>
                    Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                    <Col lg>
                    <Image src={eating} style={{width:300,height:300}}/>
                    <br/>
                    Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                </Row>
                <div style={{paddingTop:"2rem"}}>

                </div>
                <Row>
                <Col lg>
                        <Image src={eating} style={{width:300,height:300}}/>
                        <br/>
                        Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                    <Col lg>
                    <Image src={eating} style={{width:300,height:300}}/>
                    <br/>
                    Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                    <Col lg>
                    <Image src={eating} style={{width:300,height:300}}/>
                    <br/>
                    Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                    <Col lg>
                    <Image src={eating} style={{width:300,height:300}}/>
                    <br/>
                    Chips Kuku<br/>
                        Tsh 3000<br/>
                        <Button variant="danger" size="sm">Order now</Button>

                    </Col>
                </Row>

            </div>
            </div>
        );
    }
}