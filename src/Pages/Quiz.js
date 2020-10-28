import React, {useContext} from 'react';
import {AppContext} from '../App.js';
import {Link} from "react-router-dom";
import Question from '../Components/Question.js';
import Button from '@material-ui/core/Button';
import useWindowSize from '../Utils/windowResize.js';
import ParticleBG from '../Components/ParticleBG.js';


// The quiz page wrapped in memo to reduce loading if props haven't changed.
const Quiz = React.memo(() => {
    const context = useContext(AppContext);
    const questions = context.questionList.get;
    const count = context.count.get;
    const windowSize = useWindowSize();

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
            width: (windowSize.width > 450) ? 500 : (windowSize.width * .75),
        },
        link: {
            textDecoration: 'none', 
            marginTop: 10,
        }
    };

    //The statement below matches the question by count (or the index of the 
    // question in the array). It then maps it to a Question component to display
    // on screen. If count === 10 we show the "completion" page with a Particle BG.

    return(
        <div>
            {(count < 10) ? (
                <div>
                    {questions.filter((question, index) => index === count)
                            .map((question,index) => (
                                <Question
                                    key={`question${index}`}
                                    question={question}
                                    count={count}
                                />
                    ))}
                </div>
            ) : (
                <>
                    <ParticleBG 
                        height={windowSize.height} 
                        width={windowSize.width} 
                        type="secondary"
                    />
                    <div style={styles.question}>
                        <div style={styles.body}>
                            <h1>And that's it!</h1>
                            <p>Let's see how you did.</p>
                            <Link 
                                style={styles.link} 
                                to='/summary'
                            >
                                <Button variant="contained" color="primary">
                                    Continue
                                </Button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
});

export default Quiz;