import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full px-6 py-2 flex items-center justify-between bg-zinc-900 h-16">
      <Link to="/">
        <h1 className="p-2 flex items-center font-bold capitalize tracking-wider text-white text-3xl bg-blue-700">
          Workout...
        </h1>
      </Link>
      <div>
        
      </div>
    </div>
  );
};

export default Header;
