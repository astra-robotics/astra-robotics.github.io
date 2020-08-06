import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navs from './components/Navs';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkshopsPage from './pages/WorkshopsPage';
import ProjectsPage from './pages/ProjectsPage';
import URCPage from './pages/URCPage';
import AchievementsPage from './pages/AchievementsPage';
import SponsorsPage from './pages/SponsorsPage';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // Add the page url and names to be in the navbar
      pages: [
        {
          url:'/',name:'Home',render: () => { 
          return (<HomePage title='Home'/>) 
        }},
        {
          url:'/about',name:'About Us',render: () => { 
          return (<AboutPage title='About Us'/>) 
        }},
        {
          url:'/workshops',name:'Workshops',render: () => { 
            return (<WorkshopsPage title='Workshops'/>) 
        }},
        {
          url:'/projects',name:'Projects',render: () => { 
            return (<ProjectsPage title='Projects'/>) 
        }},
        {
          url:'/urc',name:'URC 2019',render: () => {
            return (<URCPage title='URC 2019'/>) 
        }},
        {
          url:'/achievements',name:'Achievements',render: () => {
            return (<AchievementsPage title='Achievements'/>) 
        }},
        {
          url:'/sponsors',name:'Sponsors',render: () => { 
            return (<SponsorsPage title='Sponsors'/>) 
          }}
      ]
    }
  }

  RoutePages() {
    var routes = this.state.pages.map((page) => {
      return (<Route exact path={page.url} render={page.render}/>);
    })
    return routes;
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>

          <Row>
            <Col>
              <Navbar className='border-bottom'>
                <Navbar.Brand>
                    <Link className='navbar-brand' to='/'>Astra Robotics</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='nav-bar justify-content-end'>
                  <Nav>
                    <Navs pages={this.state.pages}></Navs>
                  </Nav>  
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
          
          {this.RoutePages()}

        </Container>
      </Router>  
    );  
  };
}

export default App;
