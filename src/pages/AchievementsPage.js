import React from 'react';

function AchievementsPage(props) {
    document.title = 'Astra Robotics | ' + props.title;
    return (
        <h1>{props.title} page works!</h1>
    );    
}

export default AchievementsPage;