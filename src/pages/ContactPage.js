import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ContactPage extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            title: props.title
        }
    }

    componentDidMount() {
        document.title = 'Astra Robotics | '+this.state.title;
    }

    render() { 
        return ( 
            <>
                <Container id="contactPage" className='page' style={{textAlign: 'start'}}>
                    <Row>
                        <Col>
                            <h3 id='contactus' className='border-bottom'>Contact Us</h3>
                            <br/>
                            <p className='lead' style={{textAlign: "center"}}>We entertain requests regarding conduction of robotics workshops so as to reach as many budding Tech-enthusiasts as we possibly can! 
                            We also invite partnership proposals from industry stallwarts and tech startups alike. You can use the form below to get in touch with us!</p>
                        </Col>
                    </Row>
                    <br/>
                    <Container style={{width: "50%", minWidth: "300px"}}>
                        <Row>
                            <Col>
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
                                    <Button type="submit">Send Message</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>  
                </Container>
            </>      
        );
    }
}
 
export default ContactPage;