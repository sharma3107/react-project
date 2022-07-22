import React, { useState } from 'react'
import { createContext } from 'react'
import Table from './Table'
export const FormContext = createContext()


function Main2() {

    const [firstName, setFirstName] = useState("")
    const [city, setCity] = useState("")
    const [tableData, setTableData] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let formValue = {
            id: new Date().getTime().toString(),
            firstName, city
        }
        setTableData([...tableData, formValue])
        setFirstName("")
        setCity("")
    }
    function handleDelete(id) {
        const filteredData = tableData.filter((item) => item.id !== id)
        setTableData(filteredData)
    }


    return (
        <FormContext.Provider value={{ handleDelete }}>
            <>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card p-5">
                                <form action="">
                                    <input type="text" placeholder='Enter your name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="my-2 form-control" />
                                    <input type="text" placeholder='Enter your city' value={city} className='my-2 form-control' onChange={(e) => { setCity(e.target.value) }} />
                                </form>
                                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            </div>
                            <hr />
                            <Table tableData={tableData} />
                        </div>
                    </div>
                </div>

            </>
        </FormContext.Provider>
    )

}
export default Main2