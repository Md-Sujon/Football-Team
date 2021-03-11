
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import TeamDetail from './Component/TeamDetail/TeamDetail';

import './App.css';




function App() {
  return (
    // <div className="App">

      



<Router>
        <Switch>

        

          <Route path="/home">
          <Header></Header>
            <Home />
          </Route>

          <Route path="/Team/:idTeam">
          <TeamDetail></TeamDetail>
          </Route>

          <Route exact path="/">
          <Header></Header>
            <Home />
            
          </Route>

          
          <Route path="*">
            <NotFound></NotFound>
          </Route>

          
        

        </Switch>
      </Router>
// </div>

      
      

    
  );
}

export default App;
