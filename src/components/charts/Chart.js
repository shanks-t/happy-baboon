import React, { useState, useEffect } from "react" 
import { Line } from "react-chartjs-2";


export const Chart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(
      () => {
         const fetchChartData = async () => {
            const res = await fetch("http://localhost:8088/routineEntries")
            const data = await res.json()
                  setChartData({
                      labels: data.map((item) => item.date),
                      datasets: [
                          {
                              label: "Anxiety Level",
                              data: data.map((item) => item.anxietyLevel),
                              backgroundColor: [
                                  "#ffbb11",
                                  "#ecf0f1",
                                  "#50AF95",
                                  "#f3ba2f",
                                  "#2a71d0"
                              ]
                          }
                      ]
                  })
                }
                fetchChartData()
            },
      []
  )
  console.log("chartData", chartData)

    return (
        <div className="chart">
            <Line
             data={chartData}
             options={{
                    scales: {
                        y: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }
            }}
             />
        </div>

    )

}