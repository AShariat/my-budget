import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION } from "../../utils/mutations";
import { QUERY_TRANSACTIONS, QUERY_ME } from "../../utils/queries";

const TransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addTransaction, { error }] = useMutation(ADD_TRANSACTION, {
    update(cache, { data: { addTransaction } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
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

      // update thought array's cache
      const { transactions } = cache.readQuery({ query: QUERY_TRANSACTIONS });
      cache.writeQuery({
        query: QUERY_TRANSACTIONS,
        data: { transactions: [addTransaction, ...transactions] },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setAmount(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to database
      await addTransaction({
        variables: { amount },
      });

      // clear form value
      setAmount("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something Went Wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new thought..."
          value={amount}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
