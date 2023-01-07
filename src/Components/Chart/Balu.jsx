import React from 'react'
import {Bar} from "react-chartjs-2";
import {Chart, LinearScale, CategoryScale, BarElement,Legend,Title,Tooltip} from "chart.js";
Chart.register(
    LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)

const labels=["Jan","Febraury", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const options ={
    plugins:{
        legend:{
            position:'top'

        },
        title:{
            display:true,
            text:"Expense Tracker"
        }
    }
}
const Balu = () => {
const data ={
    labels,
    datasets : [
        {
            label:'2020 Expense',
            data:[100,200,300,400,500,600,700,800,900,1000,1100,1200],
            backgroundcolor:'pink'

        },
        {
            label:'2021 Expense',
            data:[100,200,300,400,500,600,700,800,900,1000,1100,1200],
            backgroundcolor:'yellow'

        }
    ]
}
  return (
    <div style={{'height':400,'width':800, 'margin':'auto'}}>
        <Bar options={options} data={data}/> 
        </div>
  )
}

export default Balu;