import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import RoutineEntry from "./RoutineEntry"
import "./BaboonRoutineEntries.css"

export const BaboonRoutineEntriesList = () => {
    const [entries, setEntries] = useState([])

    useEffect(
        () => {
            getAllBaboonRoutineEntries("http://localhost:8088/baboonRoutineEntries")
                .then((data) => {
                    setEntries(data)
                    console.log("data:", data)
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
                    entries.map(item => <RoutineEntry key={item.id} entry={item}/>)
                }
            </article>
        </>
    )
        </>
    )
}
