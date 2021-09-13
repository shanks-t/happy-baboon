import React from "react"
import { Route } from "react-router-dom"
import { BaboonBuilderForm } from "./baboonBuilder/BaboonBuilderForm"
import { BaboonRoutineEntriesList } from "./baboonBuilder/BaboonRoutineEntriesList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/baboonBuilder">
                <BaboonBuilderForm />
            </Route>
            <Route exact path="/baboonRoutineEntries">
                <BaboonRoutineEntriesList />
            </Route>
            
        </>
    )
}
