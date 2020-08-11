import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Articles from '../components/Articles'
import PageImage from '../components/PageImage'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            articles: [
                {
                    heading: "THE MARS ROVER PROJECT",
                    body:
                    `We participate every year in The University Rover Challenge (URC) which is an annual international competetion hosted by the Mars Society 
                    for university and college teams to fabricate a prototype Mars Rover, which will then be subjected to a series of tasks and challenges. 
                    The competition pushes the teams to the extreme limits of engineering, management and proactively work towards the motto of the challenge,
                    "Think, Design and Engineer"`,
                    link: "/urc"
                },
                {
                    heading: "SOCIAL PROJECTS",
                    body: 
                    `We believe that our robotics can be very influential in helping the world. 
                    We have thus decided to focus our knowledge in robotics with the aim of assisting people.`,
                    link: '/projects'
                }
            ]
        }
    }
    componentDidMount() {
        document.title = 'Astra Robotics | ' + this.state.title;
    }
    render() {
        return (
            <Container id="homePage" className='page' fluid={true}>
                <Row>
                    <Col className='p-0'>
                        <PageImage title={this.state.title}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
        {/*<Articles articles={this.state.articles}/>*/}
                    </Col>
                </Row>
            </Container>
        );
    }    
}

export default HomePage;