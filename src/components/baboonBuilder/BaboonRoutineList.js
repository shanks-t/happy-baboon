import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import Routine from "./Routine"
import { getFetch } from "../ApiManager"

export const BaboonRoutineList = () => {
    const [routines, setRoutines] = useState([])
    const [user, setUser] = useState([])
    
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


    return (
        <>
        <h2>Current Routines</h2>
        <article className="routines-container">
                    {
                        routines.filter(elem => elem.userId === user).map(item => <Routine entryKey={item.id} routine={item}/>)
                    }
                </article>
        </>
    )
}
