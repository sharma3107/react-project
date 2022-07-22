import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import ComponentA from './ComponentA'

export const userContext = createContext()
function Main() {

    const [userName, setUserName] = useState("ShaluSharma")
    return (
        <userContext.Provider value={userName}>
            <ComponentA />
        </userContext.Provider>
    )
}

export default Main