import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import Routine from "./Routine"
import { getFetch } from "../ApiManager"

export const BaboonRoutineList = () => {
    const [routines, setRoutines] = useState([])
    
    useEffect(
        () => {
            getAllBaboonRoutineEntries("http://localhost:8088/baboonRoutines")
                .then((data) => {
                    setRoutines(data)
                    console.log("routines:", data)
                })
        },
        []
    )


    return (
        <>
        <h2>Current Routines</h2>
        <article className="routines-container">
                    {
                        routines.map(item => <Routine entryKey={item.id} routine={item}/>)
                    }
                </article>
        </>
    )
}
