import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ earnings }) => {
  // Generate labels for the last few months (this can be adjusted as needed)
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  // Prepare the data for the chart
  const data = {
    labels,
    datasets: [
      {
        label: 'Earnings',
        data: earnings.length > 0 ? earnings : [0, 0, 0, 0, 0, 0], // Show 0 if no payments
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="mt-4">
      <h2>Earnings Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
