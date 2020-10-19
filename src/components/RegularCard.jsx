import React, {Component} from 'react';

function RegularCard(props) {
    const question = props.questionData;
    return(
        <div>
            <div className="card-back">
                {question.service}
            </div>
            <div className="card-front">
                <div>{question.service}</div>
                <div>{question.cat}</div>
            </div>
        </div>
    )
}

export default RegularCard; 