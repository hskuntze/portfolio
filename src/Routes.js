import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
      </Switch>
    </Router>
  );
};

export default Routes;
