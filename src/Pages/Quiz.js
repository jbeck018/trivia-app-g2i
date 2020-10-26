import React, {useContext} from 'react';
import {AppContext} from '../App.js';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const Quiz = React.memo(() => {
    const context = useContext(AppContext);
    const questions = context.questionList.get;

    return(
        <div>
            {questions.map((question, index) => (
                <div id={`question${index}`}>
                    <h1>Category: {question.category}</h1>
                    <p>{question.question}</p>
                </div>
            ))}
        </div>
    );
});

export default Quiz;