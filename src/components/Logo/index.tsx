import { GiBrain } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <GiBrain className="text-yellow-900 w-10 h-10" />
        <h1 className="text-xl font-semibold">
          Crypto<span className="text-yellow-900">Brain</span>
        </h1>
      </div>
    </Link>
  );
};
