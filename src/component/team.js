import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image, Nav } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/eating.jfif';
import bgdiv from '../img/imgdiv.jpg';
import manag from "../img/manager1.jpg";
import manag1 from "../img/mager2.png";
import manag3 from "../img/manager3.png";



export default class Team extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <Container fluid="md" className="pdtb-5">
                <Row>
                    <Col lg>
                        <Image src={manag3} rounded/>
                        <h2>Eva Milova</h2>
                        <spam style={{color:"grey"}}><b>C.E.O</b></spam>
                        <p className="teamtxt">wgywuwwuwyfifwiwuiwwifwhwhfjfgf
wufgwfwufgwfwufwfgwugfwufgwfg
wufwgfuwgfuwfguwfguw
</p>

                    </Col>
                    <Col lg>
                    <Image src={manag3} rounded/>
                        <h2>George Eliusery </h2>
                        <spam style={{color:"grey"}}><b>Manager</b></spam>
                        <p className="teamtxt">wgywuwwuwyfifwiwuiwwifwhwhfjfgf
wufgwfwufgwfwufwfgwugfwufgwfg
wufwgfuwgfuwfguwfguw
</p>

                    </Col>
                    <Col lg>
                    <Image src={manag3} rounded/>
                        <h2>Chacha Mwita</h2>
                        <spam style={{color:"grey"}}><b>Graphic Designer</b></spam>
                        <p className="teamtxt">wgywuwwuwyfifwiwuiwwifwhwhfjfgf
wufgwfwufgwfwufwfgwugfwufgwfg
wufwgfuwgfuwfguwfguw
</p>

                    </Col>
                </Row>


            </Container>
        );
    }
}