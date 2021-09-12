import React, { useEffect, useState } from "react"

export const BaboonRoutineEntriesList = () => {
    const [entries, setEntries] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/entries")
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
