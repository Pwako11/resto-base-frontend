import React from 'react';
import { connect } from 'react-redux';
import { updateProductForm } from '../actions/newProductForm';
import { createProduct } from '../actions/products';

const NewProductForm = ({createProduct, updateProductForm, newProductFormData, history }) =>{

    const handleProductInputChange = event =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...newProductFormData,
            [name]: value
        }
        updateProductForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createProduct(newProductFormData, history)
    }

    return(

        <form className="form-control" onSubmit={handleSubmit}>
            
            <input 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Name" 
                value= {newProductFormData.name} 
                name= "name" 
                type="text" 
                onChange={handleProductInputChange} 
            />
            <br/>
            <input 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Price" 
                value= {newProductFormData.price} 
                name= "Price" 
                type="integer" 
                onChange={handleProductInputChange} 
            />
            <br/>
            <label>
                <textarea  
                    class= "form-control" 
                    name= "Description" 
                    placeholder= "Enter your product Description here" 
                    onChange={handleProductInputChange} 
                    value= {newProductFormData.description} >
                </textarea>
            </label>
            <br/>
            <input class="btn btn-outline-secondary" type="submit" value="Save"/>
        </form>    
    )
   
}


const mapStateToProps = state => {
    return {
      newProductFormData: state.newProductForm
    }
}

export default connect(mapStateToProps, { updateProductForm, createProduct } ) (NewProductForm);