import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import Header from './Component/Layout/Header';
import Contest from './Pages/Contest';
import Home from './Pages/Home';
import Location from './Pages/Location';
import Photos from './Pages/Photos';
import Rider from './Pages/Rider';
import './App.scss'
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/riders">
            <Rider />
          </Route>
          <Route path="/contest">
            <Contest />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
