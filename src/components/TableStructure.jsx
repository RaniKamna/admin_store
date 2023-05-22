import React from 'react'

export const TableStructure = ({data}) => {
    return (
        <div>
             <table className="table table-bordered rounded">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price per Qty (Gross) </th>
                                <th scope="col">VAT</th>
                                <th scope="col">Price per Qty (net) </th>
                                <th scope="col">Total Stock: </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{product.name}</td>
                                        <td>{product.pricegross}</td>
                                        <td>{product.vat}</td>
                                        <td>{product.pricenet}</td>
                                        <td>{product.quantity}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
        </div>
    )
}
