


const Transaction = ({ type, name, amount }) => {
  return (
    <div
      className={`${
        type === "income" ? "bg-green-100" : "bg-red-100"
      } p-2 rounded-md mb-2 flex justify-between items-center`}
    >
      <div>
        <p
          className={`font-semibold text-${
            type === "income" ? "green" : "red"
          }-600`}
        >
          {name}
        </p>
      </div>
      <div>
        <p
          className={`font-semibold text-${
            type === "income" ? "green" : "red"
          }-600`}
        >
          {type === "income" ? `+ $${amount}` : `- $${amount}`}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
