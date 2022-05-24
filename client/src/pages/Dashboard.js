import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../utils/queries";
import TransactionList from "../components/TransactionList";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_TRANSACTIONS);
  const transactions = data?.transactions || [];
  console.log(transactions);
  var total = 0;
  for (var i = 0; i < transactions.length; i++) {
    total += transactions[i].amount;
  }
  console.log(total);

  return (
    <div className="container-fluid">
      <div className="col-12 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <TransactionList transactions={transactions} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
