import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { fetchAsyncTransaction } from "../../features/tranjaction/tranjactionSlice";

/* eslint-disable react/prop-types */
const transactions = [
  { type: "income", name: "Salary", amount: 1000 },
  { type: "expense", name: "Groceries", amount: 50 },
  { type: "income", name: "Freelance", amount: 300 },
  { type: "expense", name: "Dinner", amount: 30 },
  { type: "income", name: "Salary", amount: 1000 },
  { type: "expense", name: "Groceries", amount: 50 },
  { type: "income", name: "Freelance", amount: 300 },
  { type: "expense", name: "Dinner", amount: 30 },
  { type: "income", name: "Salary", amount: 1000 },
  { type: "expense", name: "Groceries", amount: 50 },
  { type: "income", name: "Freelance", amount: 300 },
  { type: "expense", name: "Dinner", amount: 30 },
];
const TransactionList = () => {
  const { isLoading, isError, error, editingItem, transactionItems } =
    useSelector((state) => state.tranjaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncTransaction());
  }, [dispatch]);
  console.log(transactionItems);
  return (
    <div className="bg-white p-4 rounded-md border-2 h-2/3 overflow-scroll">
      <h2 className="text-2xl font-semibold sticky top-0 bg-[#3B82F6] text-white pl-4 rounded-t-md  h-16">
        Transaction History
      </h2>
      <ul className="mt-4">
        {transactionItems?.map((item, index) => (
          <Transaction
            key={index}
            type={item.type}
            name={item.name}
            amount={item.amount}
          ></Transaction>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
