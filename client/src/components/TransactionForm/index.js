import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION } from "../../utils/mutations";
// import { QUERY_TRANSACTIONS, QUERY_ME } from "../../utils/queries";

const TransactionForm = (username) => {
  const user = username.username.username;
  const [formState, setFormState] = useState({
    amount: "",
    category: "",
    description: "",
  });

  const [addTransaction, { loading, error }] = useMutation(ADD_TRANSACTION);

  if (loading) return "Submitting...";
  if (error) return `Submission Error! ${error.message}`;

  // const [amount, setAmount] = useState("");
  // const [category, setCategory] = useState("");
  // const [description, setDescription] = useState("");

  // const [addTransaction, { error }] = useMutation(ADD_TRANSACTION);

  // const [addTransaction, { error }] = useMutation(ADD_TRANSACTION, {
  //   update(cache, { data: { addTransaction } }) {
  //     try {
  //       const { me } = cache.readQuery({ query: QUERY_ME });
  //       cache.writeQuery({
  //         query: QUERY_ME,
  //         data: {
  //           me: { ...me, transactions: [...me.transactions, addTransaction] },
  //         },
  //       });
  //     } catch (e) {
  //       console.warn("First Transaction Insertion by User!");
  //     }

  //     const { transactions } = cache.readQuery({ query: QUERY_TRANSACTIONS });
  //     cache.writeQuery({
  //       query: QUERY_TRANSACTIONS,
  //       data: { transactions: [addTransaction, ...transactions] },
  //     });
  //   },
  // });

  // const handleAmountChange = (event) => setAmount(event.target.value);
  // const handleCategoryChange = (event) => setCategory(event.target.value);
  // const handleDescriptionChange = (event) => setDescription(event.target.value);

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
      console.log(formState);
      console.log(user);
      // console.log(formState.amount, formState.category, formState.description);
      await addTransaction({
        variables: {
          ...formState,
          // amount: formState.amount,
          // category: formState.category,
          // description: formState.description,
        },
      });

      setFormState({ amount: "", category: "", description: "" });
      // setAmount("");
      // setCategory("");
      // setDescription("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <input
          className="form-input"
          placeholder="Amount"
          name="amount"
          type="amount"
          id="amount"
          value={formState.amount}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Category"
          name="category"
          type="category"
          id="category"
          value={formState.category}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Description"
          name="description"
          type="description"
          id="description"
          value={formState.description}
          onChange={handleChange}
        />

        {/* <textarea
          placeholder="Amount"
          value={formState.amount}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <textarea
          placeholder="Category"
          value={formState.category}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <textarea
          placeholder="Description"
          value={formState.description}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea> */}
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
