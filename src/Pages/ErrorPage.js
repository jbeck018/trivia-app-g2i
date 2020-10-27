import React from 'react';
import {Link} from "react-router-dom";
import useWindowSize from '../Utils/windowResize.js';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';

const ErrorPage = () => {
    const windowSize = useWindowSize();

    //Styles for Component:
    const styles = {
        main: {
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
        icon: {
            justifySelf: 'center',
            alignSelf: 'center',
            padding: '0 20',
            fontSize: 28,
        },
        smallText: {
            fontSize: 10,
            textAlign: 'center',
            margin: 0,
            padding: 0,
        },
        link: {
            textDecoration: 'none',
        },
        button: {
            marginTop: 10,
        }
    };

    return(
        <div style={styles.main}>
            <div style={styles.body}>
                <h1>Looks like you're lost!</h1>
                <p>Tap the button below to head back to the homepage.</p>
                <Link to="/" style={styles.link}>
                    <Button 
                        variant="contained"
                        size='large'
                        color='primary'
                        style={styles.button} 
                    >
                        Let's go <FontAwesomeIcon icon={faArrowRight} style={{paddingLeft: 10}}/>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;