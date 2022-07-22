import React from 'react'
import { useState } from 'react'
import "./style.css"

function Main() {

    const [number, setNumber] = useState(0)
    const [userName, setUserName] = useState("")
    const [formValue, setFormValue] = useState("")
    const [isShowing, setIsShowing] = useState(false)

    function handleSubmit() {
        setUserName(formValue)
        setFormValue("")
    }


    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {/* increment decrement */}
                    <div className="col-md-6 offset-md-3 shadow p-5 text-center">
                        <h2>Increment/Decrement</h2>
                        <h3>Your Number: {number}</h3>
                        <button className='btn btn-primary mx-3' onClick={() => setNumber(number + 1)}>+</button>
                        <button className='btn btn-danger' onClick={() => setNumber(number - 1)}>-</button>
                    </div>
                    {/* change name */}
                    <div className="col-md-6 offset-md-3 shadow p-5 text-center my-5">
                        <h3>Welcome, {userName} </h3>
                        <input type="text" placeholder='Enter your name' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                        <button className='btn btn-primary mx-3' onClick={handleSubmit} >Change Name</button>
                    </div>
                    {/* open close modal */}
                    <div className="col-md-6 offset-md-3 shadow p-5 text-center ">
                        <h3>Modal Box </h3>
                        <button className='btn btn-primary mx-3' onClick={() => setIsShowing(true)}>Open Modal </button>
                        {isShowing ? <div className="custom-modal">
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis assumenda autem cum vero sapiente tempora inventore quod, repudiandae recusandae ipsa modi id molestiae similique aspernatur molestias aliquid? Debitis, expedita voluptatibus.</p>
                            <button className="btn-btn-warning" onClick={() => setIsShowing(false)}>Close</button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main