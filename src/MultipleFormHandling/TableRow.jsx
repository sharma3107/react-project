import React from 'react'
import { useContext } from 'react'
import { FormContext } from './Main2'

function TableRow({ id, index, firstName, city }) {
    const { handleDelete } = useContext(FormContext)
    return (
        < tr key={id} >
            <td> {index + 1} </td>
            <td> {firstName} </td>
            <td> {city} </td>
            <td>
                {" "}
                <button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button>
                {" "}

            </td>
        </tr>
    )
}

export default TableRow