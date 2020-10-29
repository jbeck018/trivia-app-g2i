import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons';
import useWindowSize from '../Utils/windowResize.js';


//This is the component that creates the "Answer Card" for the Summary Page.
//IT will create a card with an icon followed by the annswer.
const Answer = (props) => {
    //Get window size for styles
    const windowSize = useWindowSize();

    //Styles for Component:
    const styles = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            width: (windowSize.width > 450) ? 500 : (windowSize.width * .8),
            borderRadius: 10,
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            padding: 10,
            marginBottom: 20,
            overflowWrap: 'anywhere',
            wordWrap: 'break-word',
            hyphens: 'auto',
        },
        icon: {
            justifySelf: 'center',
            alignSelf: 'center',
            padding: '0 20',
            fontSize: 28,
        },
        answers: {
            display: 'flex',
            flexDirection: 'row',
            margin: 0,
            padding: 0,
        },
        answer: {
            overflow: 'auto',
            fontSize: 14,
        },
        smallText: {
            fontSize: 10,
            textAlign: 'center',
            margin: 0,
            padding: 0,
        }
    }

    // return the actual component:
    return(
        <div style={styles.main}>
            <div style={styles.answers}>
                <FontAwesomeIcon 
                    // We check whether the answer is correct to show
                    //the corresponding icon and color.
                    icon={(props.question.correct) ? faCheck : faTimes}
                    color={(props.question.correct) ? 'green' : 'red'} 
                    style={styles.icon} 
                /> 
                <p style={styles.answer}>{ReactHtmlParser(props.question.question)}</p>
            </div>
            {props.question.correct ? null : <p style={styles.smallText}><em>This is actually {props.question.correct_answer}!</em></p>}
        </div>
    );
}

export default Answer;