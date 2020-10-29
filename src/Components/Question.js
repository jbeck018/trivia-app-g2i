import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import {AppContext} from '../App.js';
import useWindowSize from '../Utils/windowResize.js';

//TODO: add a purifier like https://github.com/cure53/DOMPurify to 
//Protect against injection attacks since we are injecting HTML

//MUI Button spacing since typical styles won't work:
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1.5),
      },
    },
  }));
  

//This component shows our questions
const Question = (props) => {
    // windowSize is to check/update items based on window dimensions
    const windowSize = useWindowSize();
    // context allows us to access the store
    const context = useContext(AppContext);
    // these are the MUI classes mentioned above
    const classes = useStyles();
    // history allows us to navigate to the next question
    const history = useHistory();
    // Check which question we are on
    const count = context.count.get;

    // Create the styles
    const styles = {
        page: {
            padding: '0 20',
            height: windowSize.height,
            overflow: 'hidden',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ededed'
        },
        body: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 5,
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            padding: 20,
            width: (windowSize.width > 450) ? 500 : (windowSize.width * .75),
            backgroundColor: '#fff',
            overflowWrap: 'anywhere',
            wordWrap: 'break-word',
            hyphens: 'auto',
        },
        category: {
            fontSize: 14,
        },
        question: {
            alignSelf: 'center',
            fontSize: 28,
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            textAlign: 'center',
        },
        true: {
            backgroundColor: '#32CD32',
            color: '#FFF',
        },
        false: {
            backgroundColor: '#FF0000',
            color: '#FFF',
        }
    };

    // This function fires when the answer is chosen.
    function handleClick(answer) {
        // Get the count of correct answers.
        const currentCorrect = context.numCorrect.get;
        //check for correct answer and update the questionList with the result.
        if (props.question.correct_answer === answer) {
            console.log('correct!')
            context.numCorrect.set(currentCorrect + 1);
            context.questionList.set(qL => [...qL, qL[count].correct = true].slice(0,10))
        } else {
            context.questionList.set(qL => [...qL, qL[count].correct = false].slice(0,10))   
        }
        //increase the count and send to next question
        context.count.set(count+1);
        history.push(`/quiz/${props.count + 1}`)
    }

    return(
        <div style={styles.page}>
            <div style={styles.body}>
                <p style={styles.category}>{props.question.category}</p>
                <p style={styles.question}>{ReactHtmlParser(props.question.question)}</p>
                <div style={styles.buttons} className={classes.root}>
                    <Button 
                        variant="contained" 
                        onClick={() => handleClick("True")}
                        size='large'
                        style={styles.true}
                    >
                        True
                    </Button>
                    <Button 
                        variant="contained" 
                        onClick={() => handleClick("False")}
                        size='large'
                        style={styles.false}
                    >
                        False
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Question;