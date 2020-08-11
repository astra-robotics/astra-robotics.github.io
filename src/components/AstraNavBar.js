import React from 'react';
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
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
                return (<Nav.Link className='navbar-brand-astra' href={page.url}>{page.name}</Nav.Link>);
            else
                return (<React.Fragment/>)        
        });
        return navs;
    }

    componentDidMount() {
        window.onscroll = this.setNavbar;
    }

    setNavbar = () => {
        var current = window.scrollY;
        if(current >= this.state.scrollPosition) {
            this.setState({scrollPosition:current, top:"-100px"})
        }
        else{
            this.setState({scrollPosition:current,top:"0"})
        }
    }
    
    render() {
        return (  
            <Container className='p-0' fluid={true}>
                <Row>
                    <Col className='p-0'>
                        <Navbar id='astra-navbar' style={{top: this.state.top}} className='astra' expand='lg' fixed='top'>
                            <Navbar.Brand>
                                <Nav.Link className='navbar-brand-astra' href='/'>
                                    Astra Robotics  
                                </Nav.Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-toggle" className='navbar-dark'/>
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