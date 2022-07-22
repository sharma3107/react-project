import React, { useState } from 'react'

function Main2() {

    const [isShowing, setIsShowing] = useState(true)
    return (
        <>
            <div className="container p-5">
                <h2> use state</h2>
                {/* {isShowing ? <h1>hello I am showing</h1> : null} */}
                <div className="btn-group">
                    <button className='btn btn-danger' onClick={() => setIsShowing(false)}>Hide</button>
                    <button className='btn btn-success' onClick={() => setIsShowing(true)}>Show</button>
                    <button className="btn btn-warning" onClick={() => setIsShowing(!isShowing)}>
                        {isShowing ? "Hide" : "Show"}
                    </button>

                </div>
                <hr />
                {isShowing ?
                    <p className='p-5' style={{ transition: 1, backgroundColor: "red" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat autem nihil eius? Blanditiis, exercitationem ad! Suscipit est laborum soluta accusamus hic necessitatibus quas commodi id tempore atque ducimus, dicta quaerat.</p> : null

                }

            </div>
        </>
    )
}

export default Main2