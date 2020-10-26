import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Home from './Pages/Home.js';
import Quiz from './Pages/Quiz.js';
import Summary from './Pages/Summary.js';

export const AppContext = React.createContext();

const App = React.memo(() => {
  //init global state(s).
  const [isLoading, setIsLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

   //Create Global "Store"
   const store = {
    isLoading: {get: isLoading, set: setIsLoading},
    questionList: {get: questionList, set: setQuestionList},
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function get_data() {
    // this is just to get the csrftoken
    const url = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;
    const data = await axios.get(url)
                            .then((response) => {return response.data})
                            .catch((err) => console.log(err));
    
    //Uncomment this to see json response in console.:
    console.log(data.results)                        
    //update the state
    setQuestionList(data.results);
    //cancel the loading function
    setIsLoading(false);
  };

  //Create our effect which replaces componentDidMount and componentDidUnmount
  useEffect(() => {
    if (isLoading) {
      console.log('get_data running')
      get_data();
    }

    return () => setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <AppContext.Provider value={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/summary" component={Summary} />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
});

export default App;