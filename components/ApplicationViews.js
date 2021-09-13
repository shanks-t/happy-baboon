import React from "react"
import { Route } from "react-router-dom"
import { BaboonBuilderForm } from "./baboonBuilder/BaboonBuilderForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/baboonBuilder">
                <BaboonBuilderForm />
            </Route>
            
        </>
    )
}
