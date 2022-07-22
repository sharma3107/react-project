import React, { useState } from 'react'

function Main() {
    const [number, setNumber] = useState(0)

    function inc() {
        setNumber(number + 1)
    }

    function dec() {

        if (number > 0) {
            setNumber(number - 1)
        }
        else {
            alert("number is less than 0")
        }

    }

    return (
        <div className="container">
            <h2 className='text-center'>Use State</h2>
            <div className="card text-center offset-md-3 p-5">
                <div className="card-body">
                    <h2>Number: {number} </h2>
                    <div className="btn-group">
                        <button className='btn btn-primary' onClick={inc}>+</button>
                        <button className='btn btn-danger' onClick={dec}>-</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main