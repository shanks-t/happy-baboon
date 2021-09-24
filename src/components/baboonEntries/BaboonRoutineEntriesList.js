import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import Entry from "./Entry"
import "./BaboonRoutineEntries.css"


export const BaboonRoutineEntriesList = () => {
    const [entries, setEntries] = useState([])
    const [user, setUser] = useState([])
    const [currRoutine, setCurrRoutine] = useState([])

    
    const renderEntries = () => {
        getAllBaboonRoutineEntries("http://localhost:8088/routineEntries?_expand=routines")
            .then((data) => {
                setEntries(data)
                console.log("entries:", data)
            })
    }
    useEffect(
        () => {
        renderEntries()
        },
        []
    )

    const getCurrentUser = () => {
        const currUserId = localStorage.getItem("baboon_user")
        return currUserId
     }
    useEffect(
        () => {
             const id = getCurrentUser()
             setUser(parseInt(id))
        },
        []
    )
    useEffect(
        () => {
           
                const getCurrRoutine = () => {
                const currRoutineId = localStorage.getItem("activeRoutine")
                return currRoutineId
            }
             const routineId = getCurrRoutine()
             setCurrRoutine(parseInt(routineId))
        },
        [currRoutine]
    )
    const deleteEntry = (id) => {
        fetch(`http://localhost:8088/routineEntries/${id}`, {
            method: "DELETE"
        })
        .then(renderEntries)
    }

    return (
       <>
        <h2>Previous Entries for Routine {currRoutine}</h2>
            <article className="entries-container">
                {
                    entries.filter(elem => elem.userId === user).filter(thing => thing.routinesId === currRoutine).map(item => <Entry entryKey={item.id} entry={item} deleteFunc={deleteEntry}/>)
                }
            </article>
    )
        </>
    )
}
