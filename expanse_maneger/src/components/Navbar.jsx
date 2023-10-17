
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Expense Tracker</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Transactions
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
