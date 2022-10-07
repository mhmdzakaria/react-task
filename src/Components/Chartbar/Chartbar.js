import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
function Chartbar() {
   const data =
   {
      labels: [
     ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false
      },
       hoverOffset: 4
      }]
    }
  return (
    <div >
<Doughnut data={data} />
   </div>
  )
}
export default Chartbar