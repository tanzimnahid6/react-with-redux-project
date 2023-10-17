import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAsyncTranjaction,
  editInActive,
  fetchAsyncTransaction,
  updateAsyncTranjaction,
} from "../features/tranjaction/tranjactionSlice";
import Swal from "sweetalert2";

const ExpenseForm = () => {
  const { editingItem } = useSelector((state) => state.tranjaction);
  const [transactionType, setTransactionType] = useState("income");
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [editMood, seteditMood] = useState(false);
  const dispatch = useDispatch();
  

  const reset = () => {
    setTransactionType("income");
    setTransactionName("");
    setTransactionAmount("");
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: transactionName,
      amount: Number(transactionAmount),
      type: transactionType,
    };
    const res = dispatch(addAsyncTranjaction(obj));

    if (res.requestId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `You successfully added your ${transactionType}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };
  //update data function
  const handleUpdate = (e) => {
    e.preventDefault();
    const obj = {
      name: transactionName,
      amount: Number(transactionAmount),
      type: transactionType,
    };
    dispatch(
      updateAsyncTranjaction({
        id: editingItem?.id,
        obj,
      })
    );
    dispatch(fetchAsyncTransaction())
    reset()
    seteditMood(false)
  };

  //set the data in the form which may have to update
  useEffect(() => {
    if (editingItem.id) {
      seteditMood(true);

      setTransactionAmount(editingItem?.amount);
      setTransactionName(editingItem?.name);
      setTransactionType(editingItem?.type);
    } else {
      seteditMood(false);
      reset();
    }
  }, [editingItem]);
  const handleCancleUpdate = ()=>{
    dispatch(editInActive())
    seteditMood(false);
    reset()
  }
  return (
    <form
      onSubmit={editMood ? handleUpdate : handleSubmit}
      className="bg-white p-4 rounded-md shadow-md"
    >
      {editMood ? (
        <h1 className="text-2xl font-bold text-primary text-center ">
          Update Transaction
        </h1>
      ) : (
        <h1 className="text-2xl font-bold text-primary text-center ">
          Add New Transaction
        </h1>
      )}
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
              onChange={() => setTransactionType("income")}
            />
            Income
          </label>
          <label>
            <input
              type="radio"
              value="expense"
              checked={transactionType === "expense"}
              onChange={() => setTransactionType("expense")}
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
          required
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
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
          required
          id="transactionAmount"
          name="transactionAmount"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      {editMood ? (
        <button
          type="submit"
          className="bg-secondary text-white w-full my-2 p-2 font-bold rounded-md hover:bg-red-800"
        >
          Update Transaction
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-500 font-bold w-full  text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Tranjaction
        </button>
      )}
      <br />
      {editMood && (
        <button
          onClick={handleCancleUpdate}
          className="bg-red-500 font-bold w-full text-white p-2 rounded-md hover:bg-blue-600"
        >
          Cancle
        </button>
      )}
    </form>
  );
};

export default ExpenseForm;
