import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            title: props.title,
            contactno: '+91 82772 94539',
            emailid: 'teamastra@rvce.edu.in',
            handles: [
                {   
                    field: 'Twitter',
                    body:['twitter.com/AstraRobotics'],
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','twitter']} size='3x'/>)
                    }
                },
                {   
                    field: 'Facebook',
                    body: ['www.facebook.com/AstraRobotics'],
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','facebook']} size='3x'/>)
                    }
                },
                {   
                    field: 'Instagram',
                    body: ['instagram.com/astra_robotics'],
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','instagram']} size='3x'/>)
                    }
                },
                {   
                    field: 'Github',
                    body: ['github.com/astra-robotics'],
                    icon_render: () => {
                        return (<FontAwesomeIcon icon={['fab','github']} size='3x'/>)
                    }
                }
            ]
        }
    }

    render() {
        return (
            <Container id="Footer" fluid={true} style={{zIndex: -10, paddingTop: "100px", margin: "auto"}}>
                {/* <Row className='border-top' xs={1} sm={1} md={2} lg={4} style={{padding: "20px"}}>
                    <Col className='d-flex justify-content-center' style={{margin: "auto"}}>
                        <img src="/assets/images/astra_logo.svg" style={{width: "30%", minWidth: "50px"}} alt="Astra logo"/>
                    </Col>
                    <Col style={{margin: "auto", textAlign: "center"}}>
                        <h4 className='border-bottom' style={{width: 'fit-content', margin: "auto"}}>Contact</h4>
                        <p className='lead'>{this.state.contactno}<br/>
                            <a href={'mailto:'+this.state.emailid}>{this.state.emailid}</a> 
                        </p>
                    </Col>
                    <Col style={{margin: "auto", textAlign: "center"}}>
                        <h4 className='border-bottom' style={{width: 'fit-content', margin: "auto"}}>Address</h4>
                        <p className='lead'>Astra Robotics<br/>RV College of Engineering<br/>Bangalore</p>
                    </Col>
                    <Col style={{margin: "auto", textAlign: "center"}}>
                        <p className='lead'>Feel free to drop us a message <a href='/contact'>here</a></p>
                    </Col>
                </Row> */}
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0'>&copy; Team Astra Robotics</Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>Designed by our team with<span role='img' aria-label='love'>&nbsp;❤️</span></Col>
                </Row>
            </Container>
        );
    }    
}
 
export default Footer;