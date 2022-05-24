// integrate Apollo into the front end
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import { Customer1, Customer2, Customer3 } from './components/IndividualTestimony';
import PotentialDashboardForUsers from './components/PotentialDashboardForUsers';
import { UserInputModal, LoggedOutUserModal, SignUpModal } from './components/Modal';

// establish new link to the GraphQL server
const httpLink = createHttpLink({
  uri: '/graphql',
});

// instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

/* check if logged in for conditional render of login page */
/* if logged in then load different nav-bar for better user expereince */

function App() {

  const [page, setPage] = useState("Home");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  };

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
      return <PotentialDashboardForUsers changeFunction={changePage} />
    } 
  };

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <ApolloProvider client={client}>
    {/* <Router> */}
    <div>
      {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> */}
      <Navigation changeFunction={changePage}></Navigation>
      {renderSection()}
      {/* </Routes> */}
      <Footer />
    </div>
    {/* </Router> */}
    </ApolloProvider>
  );
};

export default App;
