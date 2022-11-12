import './App.css';
import Navbar from './components/dumb/navbar/navbar.jsx';
import Countries from './components/smart/countries/countries.jsx';
import {Route} from 'react-router-dom';
import Landing from './components/dumb/landing/landing';
import Details from './components/smart/details/details.jsx';

function App() {
  return (
    <div className="App">
      <Route path={"/"} exact component={Landing}/>
      <Route path={"/countries"}>
      <Navbar />
      </Route>
      <Route path={"/countries"} exact render={() => <Countries/>} />
      <Route path={"/countries/:id"} exact render = { () => <Details/>}/>
    </div>
  );
}

export default App;
