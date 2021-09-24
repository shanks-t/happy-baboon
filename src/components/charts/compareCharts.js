import React, { useState, useEffect } from "react" 
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom"

export const Chart = () => {
    const [chartData, setChartData] = useState({})
    const [compareData, setCompareData] = useState({})
    console.log("id:", id)
    const getEntriesByRoutine = () => {   
        return fetch(`http://localhost:8088/routineEntries`)
        .then(res => res.json())
        .then(data => setChartData(data))
    }



    useEffect(() => {
        getEntriesByRoutine()
    }, [])

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