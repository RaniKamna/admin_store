import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import '../../App.css';
import Productform from '../Productform';
import { TableStructure } from '../TableStructure';

export default function Home() {
    const [showdata, setShowdata] = useState([]);

    const show = () => {
        //console.log(process.env.REACT_APP_API_URL);
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
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
                    <TableStructure data={showdata} />
                </div>
            </div>
        </div>
    )
}
