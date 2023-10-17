import { useState } from "react";

const ExpenseForm = () => {
  const [transactionType, setTransactionType] = useState("income");
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleTransactionNameChange = (e) => {
    setTransactionName(e.target.value);
  };

  const handleTransactionAmountChange = (e) => {
    setTransactionAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      transactionName,
      transactionAmount: Number(transactionAmount),
      transactionType,
    };
    console.log(obj);
    setTransactionType("expense");
    setTransactionName("");
    setTransactionAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-primary text-center ">Add New Transaction</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold"
          htmlFor="transactionType"
        >
          Transaction Type:
        </label>
        <div className="mt-2">
          <label className="mr-4">
            <input
              type="radio"
              value="income"
              checked={transactionType === "income"}
              onChange={handleTransactionTypeChange}
            />
            Income
          </label>
          <label>
            <input
              type="radio"
              value="expense"
              checked={transactionType === "expense"}
              onChange={handleTransactionTypeChange}
            />
            Expense
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold"
          htmlFor="transactionName"
        >
          Transaction Name:
        </label>
        <input
          type="text"
          id="transactionName"
          name="transactionName"
          value={transactionName}
          onChange={handleTransactionNameChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold"
          htmlFor="transactionAmount"
        >
          Amount:
        </label>
        <input
          type="number"
          id="transactionAmount"
          name="transactionAmount"
          value={transactionAmount}
          onChange={handleTransactionAmountChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
