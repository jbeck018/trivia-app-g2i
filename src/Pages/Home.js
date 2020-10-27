import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import useWindowSize from '../Utils/windowResize.js';

const Home = React.memo(() => {

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
            zIndex: 9999,
            width: 275,
        },
        button: {
            marginTop: 10,
        },
    };

    return(
        <div 
            style={styles.question}
        >
            <div style={styles.body}>
                <h1>Welcome to TriviaMatic!</h1>
                <p>You will be presented with 10 True or False questions.</p>
                <p>Can you score 100%?</p>
                <Link 
                    style={{textDecoration: 'none'}} 
                    to='/quiz'
                >
                    <Button 
                        variant="contained"
                        size='large'
                        color='primary'
                        style={styles.button} 
                    >
                        Begin
                    </Button>
                </Link>
            </div>
        </div>
    );
});

export default Home;
