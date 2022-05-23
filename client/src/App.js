import './App.css';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import Signup from './components/Signup'
import { Customer1, Customer2, Customer3 } from './components/IndividualTestimony';
import PotentialDashboardForUsers from './components/PotentialDashboardForUsers';
import { UserInputModal, LoggedOutUserModal, SignUpModal } from './components/Modal';

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

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const renderSection = () => {
    if (page === 'Home') {
      return <Home changeFunction={changePage} />
    } else if (page === 'Testimonials') {
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
    } else if (page === 'Signup') {
      return <Signup changeFunction={changePage} />
    }
  };

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <Navigation changeFunction={changePage}></Navigation>
        {renderSection()}
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
