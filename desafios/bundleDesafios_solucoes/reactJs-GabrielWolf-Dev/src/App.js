import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from "./Components/Home";
import FirstChallenge from './Components/FirstChallege';
import SecondChallenge from './Components/SecondChallenge';
import ThirdChallenge from './Components/ThirdChallenge';
import FourthChallenge from './Components/FourthChallenge';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home /> } />
        <Route path="/challenge1" render={(props) => <FirstChallenge /> } />
        <Route path="/challenge2" render={(props) => <SecondChallenge /> } />
        <Route path="/challenge3" render={(props) => <ThirdChallenge /> } />
        <Route path="/challenge4" render={(props) => <FourthChallenge /> } />
      </Switch>
    </Router>
  );
}

export default App;
