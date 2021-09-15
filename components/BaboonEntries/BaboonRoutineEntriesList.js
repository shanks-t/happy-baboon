import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import RoutineEntry from "./RoutineEntry"
import "./BaboonRoutineEntries.css"
import { getFetch } from "../ApiManager"

export const BaboonRoutineEntriesList = () => {
    const [entries, setEntries] = useState([])
    const [routines, setRoutines] = useState([])
    
    useEffect(
        () => {
            getAllBaboonRoutineEntries("http://localhost:8088/baboonRoutineEntries?_expand=baboonRoutine")
                .then((data) => {
                    setEntries(data)
                    console.log("entries:", data)
                })
        },
        []
    )


    return (
        <>
       <>
    <h2>Previous Entries</h2>
       <article className="entries-container">
                {
                    entries.map(item => <RoutineEntry entryKey={item.id} entry={item}/>)
                }
            </article>
        </>
    )
        </>
    )
}
