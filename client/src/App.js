import "./App.css";
import React, { useState } from "react";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Login from "./components/Login";
import {
  Customer1,
  Customer2,
  Customer3,
} from "./components/IndividualTestimony";
import PotentialDashboardForUsers from "./components/PotentialDashboardForUsers";
import {
  UserInputModal,
  LoggedOutUserModal,
  SignUpModal,
} from "./components/Modal";

/* check if logged in for conditional render of login page */
/* if logged in then load different nav-bar for better user expereince */

function App() {
  const [page, setPage] = useState("Home");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
    setPage(page);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navigation changeFunction={changePage}></Navigation>
          {renderSection()}
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
