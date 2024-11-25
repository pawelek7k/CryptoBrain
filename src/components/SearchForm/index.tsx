import { useSearchContext } from "../../context/SearchContext";

export const SearchForm = () => {
  const { input, setInput } = useSearchContext();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={inputHandler}
        required
        value={input}
        placeholder="Search for a coin"
      />
    </form>
  );
};
