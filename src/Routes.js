import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Switch>
    </Router>
  );
};

export default Routes;
