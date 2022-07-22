import React from 'react'

function Movie({ movieName, desp }) {
    // const { movieName, desp } = props;
    return (
        <div className="col-md-4">
            <div className="card p-5 shadow">
                <div className="card-body">
                    <h5>Name: {movieName} </h5>
                    <p> {desp} </p>
                    <button className="btn btn-primary">View more</button>
                </div>
            </div>
        </div>
    )
}

export default Movie