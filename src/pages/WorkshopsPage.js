import React from 'react';

function WorkshopsPage(props) {
    document.title = 'Astra Robotics | ' + props.title;
    return (
        <h1>{props.title} page works!</h1>
    );    
}

export default WorkshopsPage;