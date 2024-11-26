export const fetchCoinData = async (id: string) => {
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching coin data:", err);
        throw err;
    }
};

export const fetchHistoricalData = async (id: string, currency: string) => {
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=10&interval=daily`
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching historical data:", err);
        throw err;
    }
};

export const fetchTrendingData = async () => {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching trending data:", err);
        throw err;
    }
};