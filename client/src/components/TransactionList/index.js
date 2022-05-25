import React from "react";
import { Link } from "react-router-dom";

function TransactionList({ transactions }) {
  if (!transactions.length) {
    return <h3>No Transactions Yet!</h3>;
  }

  let total = 0;
  for (var i = 0; i < transactions.length; i++) {
    total += transactions[i].amount;
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
              <tr>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.createdAt}</td>
                <td>{transaction.description}</td>
              </tr>
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
