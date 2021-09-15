import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import Entry from "./Entry"
import "./BaboonRoutineEntries.css"


export const BaboonRoutineEntriesList = () => {
    const [entries, setEntries] = useState([])
    
    
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
        <h2>Previous Entries</h2>
            <article className="entries-container">
                {
                    entries.map(item => <Entry entryKey={item.id} entry={item}/>)
                }
            </article>
    )
        </>
    )
}
