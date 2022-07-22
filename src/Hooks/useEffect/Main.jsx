import React, { useEffect, useState } from 'react'
import Img from "./Img"

function Main() {
    const [isShowing, setIsShowing] = useState(true)
    const [number, setNumber] = useState(0)
    useEffect(() => {
        console.log("main component has been ounted")
    })
    return (
        <div className='container'>
            <h3>Main Component</h3>
            <hr />
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <hr />
            <button className='btn btn-primary' onClick={() => setIsShowing(!isShowing)}>Hide/Show</button>
            {isShowing ? <Img /> : null}


        </div>
    )
}

export default Main