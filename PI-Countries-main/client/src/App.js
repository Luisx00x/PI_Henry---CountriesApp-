import './App.css';
import Navbar from './components/dumb/navbar/navbar.jsx';
import Countries from './components/smart/countries/countries.jsx';
import {Route} from 'react-router-dom';
import Landing from './components/dumb/landing/landing';

function App() {
  return (
    <div className="App">
      <Route path={"/"} exact component={Landing}/>
      <Route path={"/countries"}>
      <Navbar />
      </Route>
      <Route path={"/countries"} render={() => <Countries/>} />
    </div>
  );
}

export default App;
