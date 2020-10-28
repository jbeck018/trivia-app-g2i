import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import useWindowSize from '../Utils/windowResize.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';
import ParticleBG from '../Components/ParticleBG.js';


//This is the Home page. I wrapped this page in Memo so that it will 
// only reload if we tell it to or the page is refreshed.
const Home = React.memo(() => {
    // getting window size for responsiveness
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
        button: {
            marginTop: 10,
        },
    };

    return(
        <>
            <ParticleBG 
                height={windowSize.height} 
                width={windowSize.width} 
                type="primary"
            />
            <div 
                style={styles.question}
            >
                <div style={styles.body}>
                    <h1>Welcome to TriviaMatic!</h1>
                    <p>You will be presented with 10 True or False questions.</p>
                    <p><em>Do you have what it takes to score <b>100%</b>?</em></p>
                    <Link 
                        style={{textDecoration: 'none'}} 
                        to='/quiz/0'
                    >
                        <Button 
                            variant="contained"
                            size='large'
                            color='primary'
                            style={styles.button} 
                        >
                            Begin <FontAwesomeIcon icon={faArrowRight} style={{paddingLeft: 10}}/>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
});

export default Home;
