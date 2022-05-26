import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TRANSACTION } from "../../utils/mutations";

function TransactionList({ transactions }) {
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION);

  if (!transactions.length) {
    return <h3 className="text-center mt-5">No Transactions Yet!</h3>;
  }

  let total = 0;
  for (var i = 0; i < transactions.length; i++) {
    if (transactions[i].category === "Income") {
      total += transactions[i].amount;
    } else {
      total -= transactions[i].amount;
    }
  }

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleDelete = async (event) => {
    const transId = event.target.value;
    event.preventDefault();

    try {
      const { data } = await deleteTransaction({
        variables: { transactionId: transId },
      });
      refreshPage();
    } catch (e) {
      console.error(e);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="flex-column">
      <h3 className="text-center mb-5 text-primary">
        Your Remaining Budget is {currencyFormatter.format(total)}
      </h3>
      <table className="container">
        <thead className="border">
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {transactions &&
          transactions.map((transaction) => (
            <tbody key={transaction._id}>
              {transaction.category === "Income" ? (
                <tr className="border">
                  <td className="text-success">{transaction.category}</td>
                  <td className="text-success">
                    {currencyFormatter.format(transaction.amount)}
                  </td>
                  <td className="text-success">{transaction.createdAt}</td>
                  <td className="text-success">{transaction.description}</td>
                  <th scope="row">
                    <button
                      className="btn btn-warning"
                      value={transaction._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ) : (
                <tr className="border">
                  <td className="text-danger">{transaction.category}</td>
                  <td className="text-danger">
                    {currencyFormatter.format(transaction.amount)}
                  </td>
                  <td className="text-danger">{transaction.createdAt}</td>
                  <td className="text-danger">{transaction.description}</td>
                  <th scope="row">
                    <button
                      className="btn btn-warning"
                      value={transaction._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              )}
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default TransactionList;
