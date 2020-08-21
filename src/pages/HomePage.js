import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import FlareComponent from 'flare-react'
import Card from 'react-bootstrap/Card'

import WiggleImage from '../components/WiggleImage'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            // articles: [
            //     {
            //         heading: "THE MARS ROVER PROJECT",
            //         body:
            //         `We participate every year in The University Rover Challenge (URC) which is an annual international competetion hosted by the Mars Society 
            //         for university and college teams to fabricate a prototype Mars Rover, which will then be subjected to a series of tasks and challenges. 
            //         The competition pushes the teams to the extreme limits of engineering, management and proactively work towards the motto of the challenge,
            //         "Think, Design and Engineer"`,
            //         link: "/urc"
            //     },
            //     {
            //         heading: "SOCIAL PROJECTS",
            //         body: 
            //         `We believe that our robotics can be very influential in helping the world. 
            //         We have thus decided to focus our knowledge in robotics with the aim of assisting people.`,
            //         link: '/projects'
            //     }
            // ],
            windowDims: {
                height: window.innerHeight,
                width: window.innerWidth
            },
        }
    }
    componentDidMount() {
        document.title = 'Astra Robotics | ' + this.state.title;
        document.getElementById("astra-navbar").style.background = "#00000000";
        window.onresize = this.setWindowDims;
    }

    componentDidUnmount() {
        document.getElementById("astra-navbar").style.background = "#000000";
    }

    setWindowDims = () => {
        this.setState({
            windowDims: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }

    adjustPosition(percentage, isLeft) {
        var width = this.state.windowDims.width;
        var newWidth;
        if(width<=600) {
            newWidth = isLeft?(percentage+1):(percentage-15);
            return (newWidth/100)*width + 'px';
        }    
        else if(width<=900) {
            newWidth = isLeft?(percentage+.5):(percentage-7.5);
            return ((newWidth)/100)*width + 'px';
        }    
        else
            return (percentage/100)*width + 'px';
    }

    adjustSize(percentage) {
        var width = this.state.windowDims.width;
        if(width<=600)
            return ((percentage+5)/100)*width + 'px';   
        else if(width<=900)
            return ((percentage+4)/100)*width + 'px';
        else if(width<=1200)
            return ((percentage+3)/100)*width + 'px';
        else if(width<=1500)
            return ((percentage+2)/100)*width + 'px';    
        else
            return (percentage/100)*width + 'px';
    }

    render() {
        return (
            <Parallax className='parallax' ref={ref => (this.parallax = ref)} pages={3}>

                <ParallaxLayer offset={0} speed={0} factor={1} style={{ backgroundImage: 'url(/assets/images/Stars.png)'}} />
                <ParallaxLayer offset={1} speed={0} factor={1} style={{ backgroundImage: 'url(/assets/images/Stars.png)'}} />
                <ParallaxLayer offset={2} speed={0} factor={1} style={{ backgroundImage: 'url(/assets/images/Stars.png)'}} />

                <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(1)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1}}>   
                <img src={process.env.PUBLIC_URL + '/assets/images/astra_logo.svg'} style={{ width: this.adjustSize(30) }} alt="Astra logo"/>
                </ParallaxLayer>

                <ParallaxLayer offset={1.15} speed={0.5} style={{zIndex: 100}}>
                    <WiggleImage 
                        src={process.env.PUBLIC_URL + '/assets/images/astronaut_waving.svg'} 
                        style={{ display: 'block', width: this.adjustSize(5), marginLeft: this.adjustPosition(10, true), filter: "drop-shadow(0 0 0.10rem #000000)"}} 
                        alt="Astronaut Waving"
                    />
                    <Card className='parallax-card' style={{marginLeft: this.adjustPosition(5, true)}}>
                        <Card.Body>
                            <Card.Text>Hey there!<br/>We're Astranauts&trade;</Card.Text>
                        </Card.Body>
                    </Card>
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{zIndex: 100}}>
                    <WiggleImage 
                        src={process.env.PUBLIC_URL + '/assets/images/astronaut_sitting.svg'} 
                        style={{ display: 'block', width: this.adjustSize(6), marginLeft: this.adjustPosition(80, false), filter: "drop-shadow(0 0 0.10rem #000000)"}}  
                        alt="Astronaut Sitting"
                    />
                    <Card className='parallax-card' style={{marginLeft: this.adjustPosition(75, false)}}>
                        <Card.Body>
                            <Card.Text>Oh, hey<br/>I guess we can show you around</Card.Text>
                        </Card.Body>
                    </Card>
                </ParallaxLayer>

                <ParallaxLayer
                offset={1}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(2)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <FlareComponent 
                width={0.5*this.state.windowDims.width} 
                height={0.5*this.state.windowDims.height}
                transparent={true}
                animationName="roll"
                file={process.env.PUBLIC_URL + '/assets/animations/Earth-slow.flr'}/>
                </ParallaxLayer>

                <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => this.parallax.scrollTo(0)}>
                <FlareComponent 
                width={0.64*this.state.windowDims.width} 
                height={0.64*this.state.windowDims.height}
                transparent={true}
                animationName="active"
                file={process.env.PUBLIC_URL + '/assets/animations/Mars-slow.flr'}/>
                </ParallaxLayer>
            </Parallax>
        );
    }    
}

export default HomePage;