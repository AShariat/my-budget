import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import PotentialDashboardForUsers from './components/PotentialDashboardForUsers';

/* check if logged in for conditional render of login page */
/* if logged in then load different nav-bar for better user expereince */

function App() {

  const [page, setPage] = useState("Home")

  const renderSection = ()=> {
    if(page === 'Home'){
      return <Home />
    }else if (page === 'Testimonials'){
      return <Testimonials />
    } else if (page === 'Login') {
      return <Login />
    } else if (page === 'About') {
      return <About />
    }
  };

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <div>
      <Navigation changeFunction={changePage}></Navigation>
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;
