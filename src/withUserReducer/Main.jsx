import React from 'react'
import { useReducer } from 'react'

function Main() {

    function reducer(state, action) {

        if (action.type === "increment") {
            return { ...state, number: state.number + 1 }
        }
        if (action.type === "decrement") {
            return { ...state, number: state.number - 1 }
        }
        if (action.type === "changeName") {
            return { ...state, userName: "sharma" }
        }
        return state;

    }
    const initialState = {
        number: 0,
        userName: "Shalu"
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {/* increment decrement */}
                    <div className="col-md-6 offset-md-3 shadow p-5 text-center">
                        <h2>Increment/Decrement</h2>
                        <h3>Your Number: {state.number} </h3>
                        <button className='btn btn-primary mx-3' onClick={() => dispatch({ type: "increment" })} >+</button>
                        <button className='btn btn-danger' onClick={() => dispatch({ type: "decrement" })}>-</button>
                        <hr />
                        <h3>User Name: {state.userName} </h3>
                        <button className='btn btn-primary' onClick={() => dispatch({ type: "changeName" })}>Change Name</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main