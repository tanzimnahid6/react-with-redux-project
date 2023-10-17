import CurrentBalance from "./CurrentBalance";
import Footer from "./Footer";

import Navbar from "./Navbar";

import ExpenseForm from "./ExpenseForm";
import TransactionList from "./transactions/TransactionList";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto mt-2 shadow-lg md:flex gap-4 h-[100vh] pl-2">
        <div className="w-full md:w-1/2">
          <CurrentBalance></CurrentBalance>
          <ExpenseForm></ExpenseForm>
        </div>
        <div className="w-full md:w-1/2">
          <TransactionList></TransactionList>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
