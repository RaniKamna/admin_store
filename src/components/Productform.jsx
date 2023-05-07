import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import axios from 'axios';

export default function Productform() {
    const [showerror, setShowerror] = useState(false);
    const [productData, setProductData] = useState({});
    const [pricenet, setPricenet] = useState(0);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (e.target.name === 'pricenet') {
            e.target.value = pricenet;
        }
        setProductData((values) => ({ ...values, [name]: value }));
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const handleSubmit = (event) => {
        setShowerror(true);
        if (Object.keys(productData).length === 0) {
            event.preventDefault();
        } else if (Object.keys(productData).length <= 4) {
            event.preventDefault();
            return;
        }
        else {
            event.preventDefault();
        }
    }

    const postData = () => {
        if (Object.keys(productData).length <= 4) {
            return;
        } else {
            axios.post("http://localhost:3001/product/new", productData)
                .then((resp) => {
                    console.log(resp.data)
                })
                .catch((err) => {
                    console.log(err);
                })
            refreshPage();
        }
    }

    const calculate = () => {
        const value1 = document.getElementById('inputPiceGross').value;
        const value2 = document.getElementById('inputVat').value;

        const result = Number(value1) - Number(value2 / 100);

        document.getElementById('inputPiceNet').value = result;
        productData.pricenet = result;
    }

    return (
        <div>
            <button type="button" className="addbtn btn btn-light mb-2" data-bs-toggle="modal" data-bs-target="#productForm">
                + Add
            </button>

            <div className="modal fade" id="productForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Products</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <label for="inputProductname" className="col-sm-4 col-form-label">Product Name</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputProductname"
                                            value={productData.name}
                                            name='name'
                                            onChange={handleChange}
                                        />
                                        {
                                            ((productData.name === undefined || productData.name.length === 0) && showerror) ?
                                                (<p className='activeerror'>
                                                    <span>* </span>please fill the required filed
                                                </p>) : null

                                        }
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <label for="inputVat" className="col-sm-4 col-form-label">Vat</label>
                                    <div className="col-sm-8">
                                        <select
                                            className="form-select"
                                            id="inputVat"
                                            value={productData.vat}
                                            name='vat'
                                            onChange={handleChange}
                                        >
                                            {
                                                ((productData.vat === undefined || productData.vat.trim().length === 0) && showerror) ?
                                                    (<p className='activeerror'>
                                                        <span>* </span>please fill the required field
                                                    </p>) : null

                                            }
                                            <option value='0' selected>Select Option</option>
                                            <option value='10'>10%</option>
                                            <option value='15'>15%</option>
                                            <option value='25'>25%</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <label for="inputQuantity" className="col-sm-4 col-form-label">Quantity</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="number"
                                            value={productData.quantity}
                                            name="quantity"
                                            onChange={handleChange}
                                            className="form-control"
                                            id="inputQuantity"
                                        />
                                        {
                                            ((productData.quantity === undefined || productData.quantity.length === 0) && showerror) ?
                                                (<p className='activeerror'>
                                                    <span>* </span>please fill the required field
                                                </p>) : null
                                        }
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <label for="inputPiceNet" className="col-sm-4 col-form-label">Price (net) </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="number"
                                            value={productData.pricenet}
                                            name='pricenet'
                                            className="form-control"
                                            id="inputPiceNet"
                                            onChange={handleChange}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <label for="inputPiceGross" className="col-sm-4 col-form-label">Price (gross) </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="number"
                                            value={productData.pricegross}
                                            name="pricegross"
                                            onChange={handleChange}
                                            className="form-control"
                                            id="inputPiceGross"
                                            onKeyUp={calculate}
                                        />
                                        {
                                            ((productData.pricegross === undefined || productData.pricegross.length === 0) && showerror) ?
                                                (<p className='activeerror'>
                                                    <span>* </span>please fill the required field
                                                </p>) : null
                                        }
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <label for="selectImage" className="col-sm-4 col-form-label">Image</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="file"
                                            value={productData.image}
                                            name="image"
                                            onChange={handleChange}
                                            className="form-control"
                                            id="selectImage"
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal"><FaTrash /> Delete</button>
                                    <button type="submit" className="btn btn-primary" onClick={postData}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
