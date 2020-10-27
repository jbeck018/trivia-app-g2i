import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons';

const Answer = (props) => {

    return(
        <div style={styles.main}>
            <div style={styles.answers}>
                <FontAwesomeIcon 
                    icon={(props.question.correct) ? faCheck : faTimes}
                    color={(props.question.correct) ? 'green' : 'red'} 
                    style={styles.icon} 
                /> 
                <p>{ReactHtmlParser(props.question.question)}</p>
            </div>
            {props.question.correct ? null : <p style={styles.smallText}>This is actually {props.question.correct_answer}!</p>}
        </div>
    );
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: 275,
        borderRadius: 10,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        padding: 10,
        marginBottom: 20,
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
    smallText: {
        fontSize: 10,
        textAlign: 'center',
        margin: 0,
        padding: 0,
    }
}

export default Answer;