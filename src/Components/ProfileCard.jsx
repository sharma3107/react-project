import React, { useEffect } from 'react'

function ProfileCard({ data }) {
    const { firstName, city, age } = data

    useEffect(() => {
        console.log("profile component has been mounted")

        return () => {
            console.log("profile component has been unmounted")
        }
    }, [])
    return (
        <>
            <div className="container p-5">
                <div className="card p-2 col-md-6 shadow">
                    <div className="card-body">
                        <h5>Name: {firstName} </h5>
                        <h5>City:{city}</h5>
                        <h5>Age:{age}</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileCard