import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import '../../App.css';
import Productform from '../Productform';

export default function Home() {
    const [showdata, setShowdata] = useState([]);

    const show = () => {
        axios.get('http://localhost:3001/products')
            .then(function (response) {
                const product = response.data.products;
                setShowdata(product);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        show();
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="m-3">
                <h1>Products</h1>
                <Productform />
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
                            {showdata.map((product, id) => {
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
            </div>
        </div>
    )
}
