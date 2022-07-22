import React from 'react'
// import Movie1 from './components/Movie1'
// import Movie2 from './components/Movie2'
// import Movie3 from './components/Movie3'
import Movie from './Movie'
import { movieName } from "./Movies"
function Main(props) {
    return (
        <div className="container py-5">
            <h2>learning props</h2>
            <hr />
            <h1 className='text-center'>{props.title}</h1>
            <hr />
            <div className="row">
                {movieName.map((item) => {
                    const { id, movieName, desp } = item
                    return <Movie key={id} movieName={movieName} desp={desp} />
                })}
            </div>
        </div>
    )
}

export default Main