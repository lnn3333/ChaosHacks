import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import WeatherPage from './weatherPage';
import Home from './home';

function App() {
    return (
        <Router>
          <div>
            <Switch>
             <Route  path = "/home" component = {Home} />     
              <Route exact path = "/weather" component = {WeatherPage} />             
            </Switch>
          </div>
        </Router>
    );
}

export default App;
