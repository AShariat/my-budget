import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";

const Dashboard = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/dashboard" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  return (
    <div className="container-fluid">
      <div className="mb-3">
        {!userParam && <TransactionForm username={user} />}
      </div>
      <div className="col-12 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <TransactionList transactions={user.transactions} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
