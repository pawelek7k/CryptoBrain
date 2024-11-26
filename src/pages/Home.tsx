import { GlobalMarketData } from "../components/GlobalMarketData";
import { SearchResult } from "../components/SearchResult";
import { Trending } from "../components/Trending";
import { useSearchContext } from "../context/SearchContext";

const HomePage = () => {
  const { input } = useSearchContext();
  return (
    <>
      {!input && (
        <div className="flex flex-col md:flex-row w-full">
          <Trending />
          <GlobalMarketData />
        </div>
      )}
      {input && input.length > 0 && <SearchResult />}
    </>
  );
};

export default HomePage;
