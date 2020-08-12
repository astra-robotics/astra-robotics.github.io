import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import SubsystemTable from '../components/SubsystemTable'

class AboutPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            details: [
                {
                    subsystem: "Brain Subsystem", 
                    heads: [
                        {
                            name:"Naman A Menezes", 
                            positions: ["Team lead", "Subsystem head - Brain"],
                            imgRender: () => {
                                return(<img className='memberImage'
                                    src="https://cdn.discordapp.com/attachments/714323592703246420/742707129491914795/unknown.png"
                                    alt="char1"/>
                            )}
                        }
                    ],
                    membersCSV: process.env.PUBLIC_URL + '/assets/data/brain.csv'
                },
                {
                    subsystem: "Autonomous Subsystem", 
                    heads: [
                        {
                            name:"Ambu Karthik", 
                            positions: ["Subsystem head - Autonomous"],
                            imgRender: () => {
                                return(<img className='memberImage'
                                    src="https://cdn.discordapp.com/attachments/714323592703246420/742707213876854938/unknown.png"
                                    alt="char2"/>
                            )}
                        }
                    ],
                    membersCSV: process.env.PUBLIC_URL + '/assets/data/autonomous.csv'
                }
            ],
            data: ''
        }
    }
    
    makeAccordions() {
        var accordions = this.state.details.map((detail) => {
            return(
                <div>
                    <Accordion style={{ width: "32rem" }}>
                        <Accordion.Toggle as={Button} eventKey="0">
                        {detail.subsystem}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div>   
                                <Card className='memberCard'>
                                    {
                                        detail.heads.map((head)  => {
                                            return(
                                                <>
                                                    <h5>{head.name}</h5>
                                                    {
                                                        head.positions.map((position) => {
                                                            return(
                                                                <h5>{position}</h5>
                                                            )
                                                        })
                                                    }
                                                    {head.imgRender()}
                                                </>
                                            )
                                        })
                                    }
                                </Card>
                                <br/>
                                <SubsystemTable csvfile={detail.membersCSV}/>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                    <br/>
                </div>    
            )    
        })
        return accordions
    }
    
    componentDidMount() {
        document.title = 'Astra Robotics | ' + this.state.title;
    }
    render() {
        return (
            <Container id='aboutpage' className='page'>
                <Row>
                    <Col>
                        <h1>About us</h1>
                        <br/>
                        {this.makeAccordions()}
                    </Col>
                </Row>
            </Container>
        );
    }        
}

export default AboutPage;