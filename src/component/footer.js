import React,{Component} from "react";
import { Button, Container, Row, Col, Card, Image,FormControl,InputGroup } from 'react-bootstrap';
import './theme.css';
import bgimg from '../img/mainimg.jpg';
import imgt from '../img/eating.jfif';
import bgdiv from '../img/imgdiv.jpg';
import { DeviceCameraIcon, MailIcon } from "@primer/octicons-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faViber , } from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons';
import { faMailBulk, faMap, faMapMarker, faMapMarkerAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";
export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
        <footer className="bg-danger">
            <div className="marge ftpadding">
                <Row fluid>
                    <Col lg={4}>
                        <spam className="white titletxt">Service Time </spam>
                        <div style={{width:"70%"}}>
                    <hr className="hrtitle"/>
                    </div>
                        <p className="white">24/7 Monday to sunday</p>
                        <p className="white">from 8.00am - 11.00 pm</p>
                        

                    </Col>

                    <Col lg={4}>
                    <spam className="white titletxt">Newsletter </spam>
                    <div style={{width:"70%"}}>
                    <hr className="hrtitle"/>
                    </div>
                    <div style={{width:"70%"}}>
                    <InputGroup className="mb-3">
                        <FormControl
                             placeholder="email address*"
                             aria-label="Recipient's username"
                             aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">
                                
                            <MailIcon size={24}/>

                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    </div>
                    <Button variant="dark">Submit</Button>
                        
                    </Col>
                    <Col lg={4}>
                    <spam className="white titletxt">Social Media</spam>
                    <div style={{width:"70%"}}>
                    <hr className="hrtitle"/>
                    </div>
                    <p className="white">Follow us on social media</p>
                    <p> <SocialIcon url="https://www.instagram.com/" style={{ height: 24, width: 24 }}/> <spam className="white">lunchboxtz</spam></p>
                    <p> <SocialIcon url="https://facebook.com/" style={{ height: 24, width: 24 }}  /> <spam className="white">lunchboxtz</spam> </p>
                        
                    </Col>
                </Row>
                <hr className="hrsepare"/>
                <Row>
                    <Col lg={4}>
                        <spam className="white titletxt2">ABOUT LUNCHBOX </spam>
                        <div style={{width:"70%"}}>
                            <hr className="hrtitle"/>
                        </div>
                        <div style={{width:"60%"}}>
                        <p className="white">
                        We solve the food problem
among students by providing
a pre-paid meal subscription
packages that will enable
students to easily access
                        </p>
                        </div>

                    </Col>
                    <Col lg={4}>
                    <spam className="white titletxt2">INFORMATION</spam>
                    <div style={{width:"70%"}}>
                            <hr className="hrtitle"/>
                    </div>
                    <ul class="basiclist">
                    <li className="white"> > About us</li>
                    <li className="white"> > Teams and condition</li>
                    <li className="white"> > Our Policy</li>
                    <li className="white"> > Bills information</li>
                    </ul>
                        
                    </Col>
                    <Col lg={4}>
                    <spam className="white titletxt2">CONTACT US</spam>
                        <div style={{width:"70%"}}>
                            <hr className="hrtitle"/>
                        </div>
                        <p> <FontAwesomeIcon icon={faMapMarkerAlt}/> <spam class="white">Mwanza,malimbe,Tanzania</spam></p>
                        <p><FontAwesomeIcon icon={faViber}/> <spam className="white">+255 753 157 038</spam></p>
                        <p><MailIcon size={18}/> <spam className="white">luncbox@gmail.com</spam></p>
                        

                        
                    </Col>
                </Row>
            </div>
            <div class="text-center p-3" style={{backgroundColor: "grey"}}>
            <p className="white allright">All Rights Reserved. 2021</p>
        
    </div>
        


        </footer>
       
    </>
        );
    }
}