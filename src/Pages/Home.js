import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const Home = React.memo(() => {
    
    return(
        <div>
            <h1>Welcome to TriviaMatic!</h1>
            <h5>You will be presented with 10 True or False questions.</h5>
            <h5>Can you score 100%?</h5>
            <Link 
                style={{textDecoration: 'none'}} 
                to='/quiz'
            >
                <Button variant="contained" >
                    Begin
                </Button>
            </Link>
        </div>
    );
});

export default Home;
