import './App.css';
import Navbar from './components/dumb/navbar/navbar.jsx';
import Countries from './components/smart/countries/countries.jsx';
import {Route} from 'react-router-dom';
import Landing from './components/dumb/landing/landing';
import Details from './components/smart/details/details.jsx';
import Activities from './components/smart/activities/activities';

function App() {
  return (
    <div className="App">
      <Route path={"/"} exact component={Landing}/>
      {/* <Route path={"/home"}>
      <Navbar />
      </Route> */}
      <Route path={["/home","/activities"]} render={() => <Navbar/>}></Route>

      <Route path={"/home"} exact render={() => <Countries/>} />
      <Route path={"/activities"} exact render={ () => <Activities/>} />
      <Route path={"/home/:id"} exact render = { () => <Details/>}/>
    </div>
  );
}

export default App;
