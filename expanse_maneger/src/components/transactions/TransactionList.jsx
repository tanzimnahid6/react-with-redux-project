import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { fetchAsyncTransaction } from "../../features/tranjaction/tranjactionSlice";
import LoadingElement from "../Loading";

/* eslint-disable react/prop-types */

const TransactionList = () => {
  const { isLoading, isError,  transactionItems } =
    useSelector((state) => state.tranjaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncTransaction());
  }, [dispatch]);
 
  let contant;
  if (isLoading) {
    contant = <LoadingElement></LoadingElement>;
  }
  if (transactionItems.length === 0){
    contant = <h1>No Tranjaction Avilable</h1>
  }
    if (!isLoading && !isError && transactionItems.length > 0) {
      contant = transactionItems.map((item) => (
        <Transaction
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
          amount={item.amount}
        ></Transaction>
      ));
    }
  return (
    <div className="bg-white p-4 rounded-md border-2 h-2/3 overflow-scroll">
      <h2 className="text-2xl font-semibold sticky top-0 bg-[#3B82F6] text-white pl-4 rounded-t-md  h-16">
        Transaction History
      </h2>
      <ul className="mt-4">{contant}</ul>
    </div>
  );
};

export default TransactionList;
