import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-6 bg-blue-800">
      <div className="container flex items-center justify-between mx-auto">
        <span className="text-3xl tracking-tight text-white fony-bold">
          <Link to="/">MernHolidays.com</Link>
        </span>

        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center px-3 py-2 font-bold text-blue-600 bg-white hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
