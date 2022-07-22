import React, { useState } from 'react'

function Main() {
    const [firstName, setFirstName] = useState("")
    const [formValue, setFormValue] = useState("")

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setFormValue(firstName)
    }
    return (
        <>
            <h2>Name: {formValue} </h2>
            <form action="">
                <label htmlFor="fname">first name</label>
                <input type="text" value={firstName} onChange={handleFirstName} />
            </form>
            <button className='btn btn-primary' onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Main