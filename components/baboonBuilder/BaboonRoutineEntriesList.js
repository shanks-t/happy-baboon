import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"

export const BaboonRoutineEntriesList = () => {
    const [entries, setEntries] = useState([])

    useEffect(
        () => {
            getAllBaboonRoutineEntries("http://localhost:8088/http://localhost:8088/baboonRoutineEntries")
                .then(res => res.json())
                .then((data) => {
                    setEntries(data)
                })
        },
        []
    )

    useEffect(
        () => {

        },
        [entries]
    )

    return (
        <>
            {
                entries.map(
                    (entryObject) => {
                        return <p key={`customer--${entryObject.id}`}>{entryObject.name}</p>
                    }
                )
            }
        </>
    )
}
