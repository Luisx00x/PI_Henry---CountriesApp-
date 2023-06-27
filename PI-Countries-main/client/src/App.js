import './App.css';
import Navbar from './components/dumb/navbar/navbar.jsx';
import Countries from './components/smart/countries/countries.jsx';
import {Route} from 'react-router-dom';
import Landing from './components/dumb/landing/landing';
import Details from './components/smart/details/details.jsx';
import Activities from './components/smart/activities/activities';
export const BACK_URL = process.env.REACT_APP_BACK_URL || process.env.REACT_APP_BACK_URL_LOCAL;

console.log(BACK_URL)

export function App() {
  return (
    <div className="App">
      <Route path={"/"} exact component={Landing}/>

      <Route path={["/home","/activities"]} render={() => <Navbar/>}></Route>

      <Route path={"/home"} exact render={({location}) => <Countries query={location}/>} />
      <Route path={"/activities"} exact render={ () => <Activities/>} />
      <Route path={"/home/:id"} exact render = { () => <Details/>}/>
    </div>
  );
}

