// components/AreaGraph.js
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Graph({selectedCollege}) {
  const data = {
    labels: [
      'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March', 'April'
    ],
    datasets: [
      {
        label: 'Questions Attempted',
        data: selectedCollege.attempted_questions,
        fill: true,
        backgroundColor: '#25507B',
        borderColor: '#25507B',
        yAxisID: 'y',
        tension: 0.4,
        order : 1,
        
      },
      {
        label: 'Projected Questions Attempted',
        data: selectedCollege.projected_attempted_questions,
        fill: true,
        backgroundColor: '#A1D0FF',
        borderColor: '#A1D0FF',
        yAxisID: 'y',
        tension: 0.4,
        order : 1
      },
      {
        label: 'Accuracy (%)',
        data: selectedCollege.accuracy,
        fill: false,
        borderColor: '#FF90A1',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        yAxisID: 'y1',
        order : 0
      },
      {
        label: 'Projected Accuracy (%)',
        data: selectedCollege.projected_accuracy,
        fill: false,
        borderColor: '#455A64',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        yAxisID: 'y1',
        order : 0
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
        },
      },
      y1: {
        type: 'linear',
        display: false, // Hide y-axis for Accuracy
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            if (context.dataset.label === 'Accuracy (%)') {
              return `Accuracy: ${context.raw}%`; // Display accuracy percentage on points only
            }
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
        mode: 'index',
        intersect: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}
