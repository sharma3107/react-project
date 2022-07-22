import React, { useEffect } from 'react'

function Img() {
    useEffect(() => {
        console.log("Img component has been mounted")
    })
    return (
        <div>
            <h2>Image component</h2>
            <img src=' https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={200} />
        </div>

    )
}

export default Img