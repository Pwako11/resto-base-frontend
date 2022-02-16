import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from "../actions/product.js";
import ProductForm from "./ProductForm.js";


const ProductNewFormWrapper = ({ history, createProduct }) => {

    const handleSubmit = (formData, products, userId) => {
        createProduct(formData, products, userId)
        .then((productId)=> {
            history.push(`/products/${productId}`)
         })
    }
    return (
         <div className= "productForm">
            <h4>What new restaurant product would you like to create today ?</h4>
            < ProductForm history={history} handleSubmit={handleSubmit} />
            <>
                <button className="btn btn-secondary" onClick={() => history.goBack()}>Back</button>
            </>
        </div>
    )
};

export default connect(null, {createProduct})(ProductNewFormWrapper);