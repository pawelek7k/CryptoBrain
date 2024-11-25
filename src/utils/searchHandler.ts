
import { CoinType } from "../../types/coin";

export const searchHandler = (
    e: React.FormEvent<HTMLFormElement>,
    input: string,
    allCoin: CoinType[],
    setDisplayCoin: React.Dispatch<React.SetStateAction<CoinType[]>>
) => {
    e.preventDefault();
    const filteredCoins = allCoin.filter((coin) =>
        coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
};
