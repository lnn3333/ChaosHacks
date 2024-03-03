import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import WeatherPage from './weatherPage';
import WeatherApp from "./WeatherApp";

function App() {
    return (
        <Router>
          <div>
            <Switch>
             <Route  path = "/home" component = {WeatherApp} />     
              <Route exact path = "/weather" component = {WeatherPage} />             
            </Switch>
          </div>
        </Router>
    );
}

export default App;
