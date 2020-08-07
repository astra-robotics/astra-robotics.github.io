import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(fab);

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handles: [
                {   
                    field: 'Address',
                    body: ['Astra Robotics', 'RV College of Engineering','Bangalore'],
                    islink: false,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fas','home']} size='3x'/>)
                    }
                },
                {   
                    field: 'Faculty Advisor',
                    body: ['Dr. Geetha.K.S','Head of Department','R.V. College Engineering','Mob: +91 9900700990','Email: geethaks@rvce.edu.in'],
                    islink: false,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fas','user']} size='3x'/>)
                    }
                },
                {   
                    field: 'Team Lead',
                    body: ['Naman A Menezes','Mob: +91 82772 94539'],
                    islink: false,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fas','user']} size='3x'/>)
                    }
                },
                {   
                    field: 'Email ID',
                    body:['teamastra@rvce.edu.in'],
                    islink: false,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fas','envelope']} size='3x'/>)
                    }
                },
                {   
                    field: 'Twitter',
                    body:['twitter.com/AstraRobotics'],
                    islink: true,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','twitter']} size='3x'/>)
                    }
                },
                {   
                    field: 'Facebook',
                    body: ['www.facebook.com/AstraRobotics'],
                    islink: true,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','facebook']} size='3x'/>)
                    }
                },
                {   
                    field: 'Instagram',
                    body: ['instagram.com/astra_robotics'],
                    islink: true,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','instagram']} size='3x'/>)
                    }
                },
                {   
                    field: 'Github',
                    body: ['github.com/astra-robotics'],
                    islink: true,
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','github']} size='3x'/>)
                    }
                }
            ]    
        }
    }

    MakeParagraph(body, islink) {
        var paragraph = body.map((line) => {
            if(islink) {
                return (
                    <a className='lead' href={'https://'+ line}>{line}</a>
                )
            }
            else {
                return (
                    <p className='lead'>{line}</p>
                )
            }    
        })
        return paragraph
    }

    MakeHandles() {
        return (
            this.state.handles.map((handle) => {
                return (
                    <Container>
                        <Row>
                            <Col className='md-auto'>
                                {handle.icon_render()}
                            </Col>
                            <Col sm={10}>
                                <Row>
                                    <Col sm={6}>
                                        <h5>{handle.field}:</h5>
                                    </Col>
                                    <Col sm={10}>
                                        <p>{this.MakeParagraph(handle.body, handle.islink)}</p>
                                    </Col> 
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                )
            })
        );
    }

    render() { 
        return (
            <Container className='bg-light'>
                <br/>
                <Row className='justify-content-md-center'>
                    <Col>
                        <h3 className='heading-3 bold border-bottom'>GET IN TOUCH</h3>
                        <br/>
                        <p className='lead'>We entertain requests regarding conduction of robotics workshops so as to reach as many budding Tech-enthusiasts as we possibly can!<br/> 
                        We also invite partnership proposals from industry stallwarts and tech startups alike.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='lead'>You can use the form below to get in touch with us!</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <Form>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text' placeholder='Enter your Name'/>
                            </Form.Group>
                            <Form.Group controlId='email'>
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type='email' placeholder='Enter your Email address'/>
                            </Form.Group>
                            <Form.Group controlId='message'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' rows='6' placeholder='Tell us!'/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Send Message</Button>
                        </Form>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={6}>
                        {this.MakeHandles()}
                    </Col>
                </Row>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>&copy; Team Astra Robotics</Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>Designed by our team</Col>
                </Row>
            </Container>
        );
    }
}
 
export default Footer;