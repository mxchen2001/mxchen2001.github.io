import './App.css';

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import Home from './components/Home'
import ProjectsPage from './components/ProjectPage';
import InteractiveResume from './components/Resume';
import Food from './components/Food';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  <div class="flex flex-col h-screen justify-between">
    <HashRouter>
      <Header/>
        <Switch>
          <Route path="/Food" component={Food} />
          <Route path="/Resume" component={InteractiveResume} />
          <Route path="/Projects" component={ProjectsPage} />
          <Route path="/" component={Home} />
        </Switch>
      <Footer/>
    </HashRouter>
  </div>
  );
}

export default App;
