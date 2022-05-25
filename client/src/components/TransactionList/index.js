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
    <div>
      <h3>Your Remaining Budget is ${total}</h3>
      <table className="table">
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
    // <div className="container">
    //   <div>
    //     <h3>Your Remaining Budget is ${total}</h3>
    //   </div>
    //   {transactions &&
    //     transactions.map((transaction) => (
    //       <div key={transaction._id} className="col mb-2">
    //         <div>
    //           <p>{transaction.category}</p>
    //           <p>{transaction.amount}</p>
    //           <p>{transaction.createdAt}</p>
    //           <Link to={`/transaction/${transaction._id}`}>
    //             <p>{transaction.description}</p>
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}

export default TransactionList;
