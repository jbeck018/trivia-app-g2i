import React, {useContext} from 'react';
import {AppContext} from '../App.js';
import {useHistory} from "react-router-dom";
import Progress from '../Components/Progress.js';
import Button from '@material-ui/core/Button';
import Answer from '../Components/Answer.js';

//TODO: add a purifier like https://github.com/cure53/DOMPurify to 
//Protect against injection attacks since we are injecting HTML

const Quiz = React.memo(() => {
    const context = useContext(AppContext);
    const questions = context.questionList.get;
    const numCorrect = context.numCorrect.get;
    const history = useHistory();

    const handleClick = () => {
        context.isLoading.set(true);
        history.push("/");
    }

    return(
        <div style={styles.main}>
            <h1>You Scored:</h1>
            <Progress value={numCorrect}/>
            <p>View your results below:</p>
            {questions.map((question, index) => (
                <Answer 
                    key={`question${index}`}
                    question={question}
                />
            ))}
            <Button 
                variant="contained" 
                onClick={handleClick}
                size='large'
                color='primary'
            >
                Play Again?
            </Button>
        </div>
    );
});

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    button: {
        marginTop: 10,
    }
}

export default Quiz;