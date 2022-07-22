import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'

function HowToCreateComponent() {
    let userData = {
        firstName: "Parth",
        age: 18,
        city: "Surat"
    }
    const [userName, setUserName] = useState(userData)
    const [isShowing, setIsShowing] = useState(false)
    useEffect(() => {
        console.log("parent component has been mounted")
    }, [])
    return (
        <div className="container p-5">
            <h1>Parent component</h1>
            <button className="btn btn-primary" onClick={() => setIsShowing(!isShowing)}>
                Show/Hide
            </button>

            {isShowing ? <ProfileCard data={userName} /> : null}
        </div>
    )
}

export default HowToCreateComponent