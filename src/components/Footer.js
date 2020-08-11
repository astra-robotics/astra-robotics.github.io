import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Container>
            <br/>
            <Row className='border-top justify-content-between p-3'>
                <Col className='p-0' md={3} sm={12}>&copy; Team Astra Robotics | <a href='/contact'>Contact Us</a></Col>
                <Col className='p-0 d-flex justify-content-end' md={3}>Designed by our team with<span role='img' aria-label='love'>&nbsp;❤️</span></Col>
            </Row>
        </Container>
    );
}
 
export default Footer;