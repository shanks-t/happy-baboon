import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import useSimpleAuth from "./useSimpleAuth"
import "./Login.css"

export const Register = () => {
    const [credentials, syncAuth] = useState({
        name: "",
        email: "",
        admin: false
    })
    const { register } = useSimpleAuth()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            name: `${credentials.firstName} ${credentials.lastName}`,
            email: credentials.email,
            admin: credentials.admin
        }

        register(newUser).then(() => {
            history.push("/Routines")
        })
    }

    const handleUserInput = (event) => {
        const copy = {...credentials}
        copy[event.target.id] = event.target.value
        syncAuth(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register for Happy Baboon</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text" onChange={handleUserInput}
                        id="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input type="text" onChange={handleUserInput}
                        id="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input type="email" onChange={handleUserInput}
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...credentials }
                                if (event.target.value === "on") {
                                    copy.admin = true
                                }
                                else {
                                    copy.admin = false
                                }
                                syncAuth(copy)
                            }
                        }
                        defaultChecked={credentials.admin}
                        type="checkbox" name="admin" id="admin" />
                    <label htmlFor="admin"> Administer Account? </label>
                </fieldset>

                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}
