import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";

function Total() {
  const { loading, data } = useQuery(QUERY_TRANSACTIONS);
  const transactions = data?.transactions || [];
  console.log(loading);
  var total = 0;
  for (var i = 0; i < transactions.length; i++) {
    total += transactions[i].amount;
  }

  return <div>${total}</div>;
}

export default Total;
