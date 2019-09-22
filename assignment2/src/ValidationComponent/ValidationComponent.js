import React from 'react';

const ValidationComponent = (props) => {
    const shortText = "Text too short";
    const enoughText = "Text good enoguh";

    return (
        <h1>{props.textLength < 5 ? shortText : enoughText}</h1>
    );
}

export default ValidationComponent;