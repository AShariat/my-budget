import React from "react";
import { Link } from "react-router-dom";

function TransactionList({ transactions }) {
  if (!transactions.length) {
    return <h3>No Transactions Yet!</h3>;
  }

  return (
    <div>
      {transactions &&
        transactions.map((transaction) => (
          <div key={transaction._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/dashboard/${transaction.username}`}
                style={{ fontWeight: 700 }}
                className="text-dark"
              >
                {transaction.username}
              </Link>
            </p>
            <div className="card-body">
              <p>{transaction.category}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.createdAt}</p>
              <Link to={`/transaction/${transaction._id}`}>
                <p>{transaction.description}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TransactionList;
