import "./App.css";
import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Dashboard from "./components/Dashboard";

import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
<<<<<<< HEAD
  const [page, setPage] = useState("Home");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const renderSection = () => {
    if (page === "Home") {
      return <Home changeFunction={changePage} />;
    } else if (page === "Testimonials") {
      return <Testimonials changeFunction={changePage} />;
    } else if (page === "Login") {
      return <Login />;
    } else if (page === "About") {
      return <About changeFunction={changePage} />;
    } else if (page === "Customer1") {
      return <Customer1 changeFunction={changePage} />;
    } else if (page === "Customer2") {
      return <Customer2 changeFunction={changePage} />;
    } else if (page === "Customer3") {
      return <PotentialDashboardForUsers changeFunction={changePage} />;
    } else if (page === "Signup") {
      return <Signup changeFunction={changePage} />;
    }
  };

  const changePage = (page) => {
    setPage(page);
  };

=======
>>>>>>> develop
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/users/:_id?" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
