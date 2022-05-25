import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

const TransactionForm = (username) => {
  const [formState, setFormState] = useState({
    amount: "",
    category: "",
    description: "",
  });

  // const [addTransaction, { error }] = useMutation(ADD_TRANSACTION);

  const [addTransaction, { error }] = useMutation(ADD_TRANSACTION, {
    update(cache, { data: { addTransaction } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: {
            me: { ...me, transactions: [...me.transactions, addTransaction] },
          },
        });
      } catch (e) {
        console.warn("First Transaction Insertion by User!");
      }

      // const { transactions } = cache.readQuery({ query: QUERY_TRANSACTIONS });

      // cache.writeQuery({
      //   query: QUERY_TRANSACTIONS,
      //   data: { transactions: [addTransaction, ...transactions] },
      // });
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addTransaction({
        variables: {
          amount: JSON.parse(formState.amount),
          category: formState.category,
          description: formState.description,
        }
      });

      setFormState({ amount: "", category: "", description: "" });
    } catch (e) {
      console.error(e);
    }
  };

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  return (
    <div className="container-fluid w-75 my-5">
      <form className="container-fluid" onSubmit={handleFormSubmit}>
        <input
          className="col mb-2"
          placeholder="Amount"
          name="amount"
          type="amount"
          id="amount"
          value={formState.amount}
          onChange={handleChange}
        />
        <select
          className="col mb-2 text-secondary"
          name="category"
          id="category"
          value={formState.category}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="Income">Income</option>
          <option value="Housing">Housing</option>
          <option value="Transportation">Transportation</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Clothing">Clothing</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Insurance">Insurance</option>
          <option value="Supplies">Supplies</option>
          <option value="Personal">Personal</option>
          <option value="Debt">Debt</option>
          <option value="Retirement">Retirement</option>
          <option value="Education">Education</option>
          <option value="Savings">Savings</option>
          <option value="Gifts">Gifts</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <input
          className="col mb-2"
          placeholder="Description"
          name="description"
          type="description"
          id="description"
          value={formState.description}
          onChange={handleChange}
        />
        <button
          className="col btn btn-dark"
          type="submit"
          // onClick={refreshPage}
          onSubmit={handleFormSubmit}
        >
          Add Transaction
        </button>
      </form>
      {error && (
        <h3 className="text-danger text-center mt-5">
          Submission Failed! {error.message}
        </h3>
      )}
    </div>
  );
};

export default TransactionForm;
