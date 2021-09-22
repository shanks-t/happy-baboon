import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import Routine from "./Routine"


export const BaboonRoutineList = () => {
    const [routines, setRoutines] = useState([])
    const [user, setUser] = useState([])
    const [currRoutine, setCurrRoutine] = useState([])


 const fetchEntries = () => {
    getAllBaboonRoutineEntries("http://localhost:8088/routines")
    .then((data) => {
        setRoutines(data)
        console.log("routines:", data)
    })
 }   
    useEffect(
        () => {
            fetchEntries()
        },
        [currRoutine]
    )

   
    useEffect(
        () => {
            const getCurrentUser = () => {
                const currUserId = localStorage.getItem("baboon_user")
                return currUserId
             }
             const id = getCurrentUser()
             setUser(parseInt(id))
        },
        [user]
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
        []
    )
    useEffect(() => {
        console.log("currRoutine", currRoutine)
        console.log("user", user)
    }, [user, currRoutine])
    
    return (
        <>
        {currRoutine 
        ? <h2> Current Following Routine {currRoutine}</h2>
        : <h2>Not Currently Following Any Routines</h2>
        }
        <article className="routines-container">
                    {
                            routines.filter(elem => elem.userId === user).map(item => <Routine entryKey={item.id} routine={item} setCurrRoutine={setCurrRoutine} currRoutine={currRoutine}/>)
                    }
                </article>
        </>
    )
}
