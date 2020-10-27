import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import {AppContext} from '../App.js';
import useWindowSize from '../Utils/windowResize.js';

//TODO: add a purifier like https://github.com/cure53/DOMPurify to 
//Protect against injection attacks since we are injecting HTML

//MUI Button spacing:
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1.5),
      },
    },
  }));
  

const Question = (props) => {
    const windowSize = useWindowSize();
    const context = useContext(AppContext);
    const classes = useStyles();
    const history = useHistory();

    const styles = {
        question: {
            padding: '0 20',
            height: windowSize.height,
            overflow: 'hidden',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        },
        body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: 5,
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            padding: 20,
            width: (windowSize.width > 450) ? 500 : (windowSize.width * .75),
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
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

    function handleClick(answer) {
        const currentCorrect = context.numCorrect.get;
        const count = context.count.get;
        //check for correct answer and append.
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
        <div style={styles.question}>
            <div style={styles.body}>
                <p>{props.question.category}</p>
                <p>{ReactHtmlParser(props.question.question)}</p>
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