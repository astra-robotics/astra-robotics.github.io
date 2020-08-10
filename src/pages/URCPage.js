import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function URCPage(props) {
    document.title = 'Astra Robotics | ' + props.title;
    return (
        <Container id='urcPage' className='page'>
            <Row>
                <Col>
                    <h1>{props.title} page works!</h1>
                </Col>
            </Row>
        </Container>
    );    
}

export default URCPage;