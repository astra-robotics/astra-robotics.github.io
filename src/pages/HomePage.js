import React from 'react';

function HomePage(props) {
    document.title = 'Astra Robotics | ' + props.title;
    return (
        <h1>{props.title} page works!</h1>
    );    
}

export default HomePage;