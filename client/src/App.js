import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './components/Home'
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
  <div class="flex flex-col h-screen justify-between">
    <Header/>
      <HashRouter>
        <Switch>
          <Route path="/Projects" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    <Footer/>
  </div>
  );
}

export default App;
