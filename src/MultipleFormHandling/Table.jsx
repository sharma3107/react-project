import React from 'react'
import TableRow from './TableRow'

function Table({ tableData }) {
    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>Sr no.</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((item, index) => {
                        const { id, firstName, city } = item
                        return (
                            <TableRow id={id} index={index} firstName={firstName} city={city} key={index} />
                            // < tr key={id} >
                            //     <td> {index + 1} </td>
                            //     <td> {firstName} </td>
                            //     <td> {city} </td>
                            //     <td><button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button></td>
                            // </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table