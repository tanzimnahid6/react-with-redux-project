import { LuClipboardEdit } from "react-icons/Lu";
import { MdDeleteOutline } from "react-icons/Md";
import { useDispatch } from "react-redux";
import {
  deleteAsyncTranjaction,
  editActive,
  fetchAsyncTransaction,
} from "../../features/tranjaction/tranjactionSlice";

const Transaction = ({ type, name, amount, id }) => {
  const dispatch = useDispatch();
  //delete functionality
  const handleDelete = (id) => {
    dispatch(deleteAsyncTranjaction(id));
    dispatch(fetchAsyncTransaction());
  };
  const handleupdate = () => {
    const editObj = {
      id,
      name,
      amount,
      type,
    };
    dispatch(editActive(editObj))
  };

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
      <div className="flex gap-2 items-center cursor-pointer">
        <span>
          <LuClipboardEdit
            data-tip="Edit"
            onClick={() => handleupdate()}
            size={20}
            type="button"
          ></LuClipboardEdit>
        </span>
        <span>
          <MdDeleteOutline
            onClick={() => handleDelete(id)}
            size={24}
          ></MdDeleteOutline>
        </span>
      </div>
    </div>
  );
};

export default Transaction;
