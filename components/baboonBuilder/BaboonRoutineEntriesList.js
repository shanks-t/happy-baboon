import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
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

    useEffect(
        () => {
            
        },
        [entries]
    )
    // useEffect(
    //     () => {
            
    //     },
    //     [entries]
    // )

    return (
        <>
        <section className="entries-container">
            {
                entries.map(
                    (entryObject) => {
                        return <div className="entry" key={`customer--${entryObject.id}`}> 
                        {entryObject.date}
                        {
                            entryObject.didExercise === true
                            ? <p>I exercised at least 45 minutes today</p>
                            : <p>I did not exercise at least 45 minutes today</p>
                        }
                        {
                            entryObject.didMeditate === true
                            ? <p>I meditated at least 20 minutes today</p>
                            : <p>I did not meditated at least 20 minutes today</p>
                        }
                        </div>
                    }
                )
            }
            </section>
        </>
    )
}
