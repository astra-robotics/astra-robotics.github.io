import React from 'react';
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Build the header navigation bar
class AstraNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: props.pages,
            scrollPosition: 0,
            top: "0"
        }
    }

    // Make a Nav for each page
    MakeNavs(pages) {
        var navs = pages.map((page) => {
            if(!page.isonlylink)
                if(page.isdropdown) {
                    return(
                        <NavDropdown title={page.name} split>
                        {
                            page.dropdown.map((dropdown) => {
                                return(
                                    <NavDropdown.Item href={dropdown.url}>{dropdown.name}</NavDropdown.Item>
                                )
                            })    
                        }         
                        </NavDropdown>
                    )    
                }
                else
                    return (<Nav.Link className='navbar-brand-astra' href={page.url}>{page.name}</Nav.Link>);
            else
                return (<React.Fragment/>)        
        });
        return navs;
    }
    
    render() {
        return (  
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar id='astra-navbar' style={{top: this.state.top}} className='astra' expand='lg' fixed="top">
                            <Navbar.Toggle aria-controls="navbar-toggle" className='navbar-dark'/>
                            <Navbar.Brand>
                                <Nav.Link className='navbar-brand-astra' href='/'>
                                    Astra Robotics  
                                </Nav.Link>
                            </Navbar.Brand>
                            <Navbar.Collapse className='nav-bar justify-content-end'>
                            <Nav>
                                {this.MakeNavs(this.state.pages)}
                            </Nav>  
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>  
        );
    }    
}
 
export default AstraNavBar;