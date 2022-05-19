import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import { Customer1, Customer2, Customer3 } from './components/IndividualTestimony';
import PotentialDashboardForUsers from './components/PotentialDashboardForUsers';

/* check if logged in for conditional render of login page */
/* if logged in then load different nav-bar for better user expereince */

function App() {

  const [page, setPage] = useState("Home")

  const renderSection = ()=> {
    if(page === 'Home'){
      return <Home changeFunction={changePage} />
    }else if (page === 'Testimonials'){
      return <Testimonials changeFunction={changePage} />
    } else if (page === 'Login') {
      return <Login />
    } else if (page === 'About') {
      return <About changeFunction={changePage} />
    } else if (page === 'Customer1') {
      return <Customer1 changeFunction={changePage} />
    } else if (page === 'Customer2') {
      return <Customer2 changeFunction={changePage} />
    } else if (page === 'Customer3') {
      return <Customer3 changeFunction={changePage} />
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
