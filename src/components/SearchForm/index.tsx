import { useSearchContext } from "../../context/SearchContext";

export const SearchForm = () => {
  const { input, setInput } = useSearchContext();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
      <input
        type="text"
        onChange={inputHandler}
        required
        value={input}
        placeholder="Search for a coin"
        className="bg-zinc-950 px-4 py-1 outline-none w-[280px] text-zinc-100 rounded-lg border-2 transition duration-100 border-solid focus:border-yellow-950 border-zinc-900"
      />
    </form>
  );
};
