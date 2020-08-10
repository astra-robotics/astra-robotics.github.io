import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function makeArticle(articles) {
    var article = articles.map((article) =>{
        return (
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <Card style={{ width: '64rem' }}>
                            <Card.Title>{article.heading}</Card.Title>
                            <Card.Text style={{fontSize:"18px"}}>{article.body}</Card.Text>
                        </Card>    
                    </Col>
                </Row>
            </Container>
        )
    })
    return article
}

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: props.articles
        }
    }
    render() { 
        return ( 
            makeArticle(this.state.articles)
        );
    }
}
 
export default Articles;