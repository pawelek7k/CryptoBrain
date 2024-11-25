import { GiBrain } from "react-icons/gi";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <GiBrain className="text-yellow-900 w-10 h-10" />
      <h1 className="text-xl font-semibold">
        Crypto<span className="text-yellow-900">Brain</span>
      </h1>
    </div>
  );
};
