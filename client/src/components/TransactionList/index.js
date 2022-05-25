import React from "react";
import { Link } from "react-router-dom";

function TransactionList({ transactions }) {
  if (!transactions.length) {
    return <h3>No Transactions Yet!</h3>;
  }

  let total = 0;
  for (var i = 0; i < transactions.length; i++) {
    if (transactions[i].category === "Income") {
      total += transactions[i].amount;
    } else {
      total -= transactions[i].amount;
    }
  }

  return (
    <div className="container-fluid">
      <h3 className="col text-center mb-5 text-primary">
        Your Remaining Budget is ${total}
      </h3>
      <table className="col table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        {transactions &&
          transactions.map((transaction) => (
            <tbody key={transaction._id} className="col mb-2">
              {transaction.category === "Income" ? (
                <tr>
                  <td>
                    <Link
                      className="text-success"
                      to={`/transaction/${transaction._id}`}
                    >
                      {transaction.category}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-success"
                      to={`/transaction/${transaction._id}`}
                    >
                      ${transaction.amount}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-success"
                      to={`/transaction/${transaction._id}`}
                    >
                      {transaction.createdAt}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-success"
                      to={`/transaction/${transaction._id}`}
                    >
                      {transaction.description}
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>
                    <Link
                      className="text-danger"
                      to={`/transaction/${transaction._id}`}
                    >
                      {transaction.category}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-danger"
                      to={`/transaction/${transaction._id}`}
                    >
                      ${transaction.amount}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-danger"
                      to={`/transaction/${transaction._id}`}
                    >
                      {transaction.createdAt}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-danger"
                      to={`/transaction/${transaction._id}`}
                    >
                      {transaction.description}
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default TransactionList;
