// import React, { useEffect, useState } from 'react'

// function Main() {
//     const [isLoading, setIsLoading] = useState(true)
//     const [drinks, setDrinks] = useState([])
//     useEffect(() => {
//         fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setIsLoading(false)
//                 console.log(data)
//             })
//             .catch((err) => console.log(err))
//     })
//     return (
//         <>
//             <div className="container p-5">
//                 <h2 className='text-center text-danger'>Cocktail Products</h2>
//                 <hr />
//                 {/* loading management */}
//                 {isLoading ? <h5 className='col-md-6 offset-md-3'><div className="d-flex align-items-center">
//                     <strong>Loading...</strong>
//                     <div className="spinner-border ms-auto" role="status" aria-hidden="true" />
//                 </div>
//                 </h5> : null}

//                 <div className="card shadow p-5 col-md-4 my-4">
//                     <h5>Cocktail Name: </h5>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Main

import React, { useEffect, useState } from 'react'



function Main() {
    const [drinks, setDrinks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState()


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then((resp) => resp.json())
            .then((data) => {
                setIsLoading(false)
                setDrinks(data.drinks)

            })
            .catch((err) => console.log(err))
    }, [searchValue])

    return (
        <>
            <div className="container p-5">
                <h1 className="text-center text-danger">
                    Products
                </h1>
                <div ><input type="text" placeholder='search your product here' className='w-25 form-control text-center d-block mx-auto my-2' onChange={(e) => setSearchValue(e.target.value)} /></div>
                <hr />

                {drinks === null && <h2>No drinks found...</h2>}
                {drinks !== null && <h5>Total Drinks: {drinks && drinks.length} </h5>}


                {isLoading ? <h5>Loading...</h5> : null}
                <div className="row">
                    {drinks &&
                        drinks.map((item) => {
                            const { strDrink, strDrinkThumb, idDrink } = item
                            return (
                                <div className="col-md-3" key={idDrink} >
                                    <div className="card shadow p-3 my-3">
                                        <img src={strDrinkThumb} alt="" />
                                        <h5 className='py-2'>Drink Name: {strDrink} </h5>
                                        <div className="card-footer">
                                            <button className='btn btn-primary'>Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>

            </div>

        </>
    )
}

export default Main