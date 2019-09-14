import React from 'react';

const userOutput = (props) => {
    return (
        <div style={props.style}>
            <p>{props.title}</p>
            <p>{props.subtitle} : {props.username}</p>
        </div>
    );
}

export default userOutput;