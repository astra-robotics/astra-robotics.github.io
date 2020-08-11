import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function makeArticle(articles) {
    var article = articles.map((article) =>{
        return (
            <Card>
                {/*
                <Card.Img src={process.env.PUBLIC_URL + '/assets/images/AstraLogoGlitch.png'} alt='Astra logo' style={{opacity:"0.05"}}/>
                <Card.ImgOverlay>
                    <Card.Title>{article.heading}</Card.Title>
                    <Card.Text>{article.body}</Card.Text>
                </Card.ImgOverlay>
                */}
                <Card.Title>{article.heading}</Card.Title>
                <Card.Text>{article.body}</Card.Text>
            </Card>
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
            <Container className='articles'>
                {makeArticle(this.state.articles)}
            </Container>
        );
    }
}
 
export default Articles;