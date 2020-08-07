import React from 'react';
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Make a Nav for each page
function MakeNavs(pages) {
    var navs = pages.map((page) => {
        return (<Nav.Link href={page.url}>{page.name}</Nav.Link>);
    });
    return navs;
}

// Build the header navigation bar
function AstraNavBar(props) {
    return (  
        <Container className='bg-light' fluid={true}>
            <Row>
                <Col>
                    <Navbar className='border-bottom' background='transparent' expand='lg'>
                        <Navbar.Brand>
                            <Nav.Link className='navbar-brand' href='/'>Astra Robotics</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-toggle" />
                        <Navbar.Collapse className='nav-bar justify-content-end'>
                        <Nav>
                            {MakeNavs(props.pages)}
                        </Nav>  
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>  
    );
}
 
export default AstraNavBar;