import React, { useState, useEffect } from "react";
import {Line} from "react-chartjs-2"
import { useParams } from 'react-router-dom';
import 'chart.js/auto';




const CoinChart = ()=> {

    const [days, setDays]=useState(1);
    const {id} = useParams();
    const [histData, setHistData]=useState([]);
    
    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
        .then(res => res.json())
        .then((res) => {
            setHistData(res.prices);
            console.log(histData);
        });
       
     },
    [days]);
 
    const chartDays = [
        {
          label: "24 hours",
          value: 1,
        },
        {
            label: "Week",
            value: 7,
          },
        {
          label: "Month",
          value: 30,
        },
        {
          label: "1 year",
          value: 365,
        },
      ];


    return(
        <div>
        <Line
          data={{
            labels: histData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: histData.map((coin) => coin[1]),
                  label: `Price (${days} Days Past) in USD`,
                  borderColor: "rgb(0, 255, 150)",
                },
              ],
          }}

          height={400}
          width={600}

            options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
        />

        <div className="my-2 float-end">

            {chartDays.map((n)=>{
                return  <button type="button" className="btn btn-outline-success mx-3"
                 key={n.value} onClick={()=>{setDays(n.value)}}>{n.label}</button>
            })}

        </div>

      </div>
    
    );
}

export default CoinChart;