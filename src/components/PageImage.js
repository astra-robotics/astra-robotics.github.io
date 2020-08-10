import React, { Component } from 'react';

class PageImage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            images : [
                {name: 'Home', render: () => {
                    return(<img className='img-fluid'
                    src= {process.env.PUBLIC_URL + '/assets/images/AstraRoboticsTiktok.png'}
                    alt="House island"/>)
                }}
            ],
            title : props.title
        }
    }
    /*
    componentDidMount() {
        window.onscroll = this.handleScroll;
        document.getElementById('astra-navbar').style.backgroundColor = ""
    }

    handleScroll = function(){
        var pageImage = document.getElementById('pageImage')
        var navbar = document.getElementById('astra-navbar')
        navbar.style.backgroundColor = (document.documentElement.scrollTop >= pageImage.scrollHeight - navbar.scrollHeight)?"#ffffff":""
    }
    */
    getElement(props) {
        var element = this.state.images.map((image) => {
            if (image.name === this.state.title)
                return image.render()
            else
                return (<React.Fragment/>)
        })
        return element
    }
    
    render() { 
        return ( 
            <div id='pageImage' style={{textAlignLast: "center"}}>{this.getElement()}</div>
        );
    }
}
 
export default PageImage;