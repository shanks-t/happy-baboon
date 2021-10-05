import React, { useEffect, useState } from "react"
import { getAllBaboonRoutineEntries } from "../ApiManager"
import Routine from "./Routine"


export const BaboonRoutineList = () => {
    const [routines, setRoutines] = useState([])
    const [user, setUser] = useState([])
    const [currRoutine, setCurrRoutine] = useState([])
    const [name, setName] = useState("Clyde")


    const getUserName = () => {
        const userObj = routines.find(item => item.userId === user)
        setName(userObj?.user?.name)
    }

 const fetchEntries = () => {
    getAllBaboonRoutineEntries("http://localhost:8088/routines?_expand=user")
    .then((data) => {
        setRoutines(data)
        console.log("routines:", data)
    }).then(getUserName)   
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
    }, 
    [user, currRoutine])

    const deleteRoutine = (id) => {
        fetch(`http://localhost:8088/routines/${id}`, {
            method: "DELETE"
        })
        .then(fetchEntries)
    }



    return (
        <>
        {currRoutine 
        ? <h2> Hello Clyde! You Are Currently Following Routine {currRoutine}</h2>
        : <h2>Hello Clyde! You Are Not Currently Following Any Routines</h2>
        }
        <article className="routines-container">
            {
                    routines.filter(elem => elem.userId === user).map(item => <Routine entryKey={item.id} routine={item} setCurrRoutine={setCurrRoutine} currRoutine={currRoutine} deleteFunc={deleteRoutine}/>)
            }
        </article>
        </>
    )
}
