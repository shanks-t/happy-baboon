import React, { useEffect, useState } from "react"
import { NavBar } from "./NavBar"

export const NavBarImg = () => {
    const [user, setUser] = useState([])
    const [userImg, setUserImg] = useState([])

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
           const fetchUserImages = async () => {
              const res = await fetch("http://localhost:8088/users")
              const data = await res.json()
                setUserImg(data.filter(elem => elem.id === user)
                .map(item => item.image))
                }
                fetchUserImages()
                
              },
        [user]
    )
    console.log("userImg:", userImg)
    console.log("user:", user)

    return (
        <>
            <NavBar img={userImg} /> 
        </>
    )
}