import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './css/App.css';
import AstraNavBar from './components/AstraNavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorkshopsPage from './pages/WorkshopsPage';
import ProjectsPage from './pages/ProjectsPage';
import URCPage from './pages/URCPage';
import AchievementsPage from './pages/AchievementsPage';
import SponsorsPage from './pages/SponsorsPage';

class App extends React.Component {

    state = {
      // Add the page url and names to be in the navbar and router
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
          url:'/rovers',name:'Our rovers',
          // isdropdown: true,
          // dropdown: [
          //   {name: 'URC 2019', url: '/rovers#urc2019'},
          //   {name: 'IRC 2020', url: '/rovers#irc2020'},
          //   {name: 'IRDC 2020', url: '/rovers#irdc2020'}
          // ],
          render: () => {
            return (<URCPage title='Our rovers'/>) 
        }},
        {
          url:'/achievements',name:'Achievements',render: () => {
            return (<AchievementsPage title='Achievements'/>) 
        }},
        {
          url:'/sponsors',name:'Sponsors',render: () => { 
            return (<SponsorsPage title='Sponsors'/>) 
        }},
        // {
        //   url:'/contact',name:'Contact us',render: () => { 
        //     return (<ContactPage title='Contact Us'/>) 
        // }}
      ]
    }

  // Route all pages defined
  RoutePages() {
    var routes = this.state.pages.map((page) => {
      return (<Route exact path={page.url} render={page.render}/>);
    })
    return routes;
  }

  // Render main app with routes and a container
  render() {
    return (
      <Router>
        <Container fluid={true} id="mainContainer">
          <AstraNavBar pages={this.state.pages}/>
          {this.RoutePages()}
        </Container>     
      </Router>  
    );  
  };
}

export default App;