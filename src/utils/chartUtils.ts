import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import type { HistoricalDataType } from '../../types/historicalData';

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend);

export const prepareChartData = (historicalData: HistoricalDataType, currencySymbol: string) => {
    return {
        labels: historicalData.prices.map((entry: number[]) =>
            new Date(entry[0]).toLocaleDateString()
        ),
        datasets: [
            {
                label: `Price in ${currencySymbol}`,
                data: historicalData.prices.map((entry: number[]) => entry[1]),
                borderColor: "#422006",
                backgroundColor: "#713f12",
                borderWidth: 2,
                pointBackgroundColor: "#422006",
            },
        ],
    };
};

export const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "top" as const,
        },
    },
    scales: {
        y: {
            beginAtZero: false,
            type: 'linear',
        },
    },
};
