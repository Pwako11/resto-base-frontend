import React from 'react';
import { connect } from 'react-redux';
import { updateProductForm } from '../actions/productForm';

const ProductForm = ({formData, products, updateProductForm, userId, handleSubmit, editMode}) =>{

    const{name, price, description} = formData

    const handleChange = event =>{
        const {name, value} = event.target
        updateProductForm(name, value)
    }

    return(

        <form className="form-control" onSubmit={event =>{
            event.preventDefault()
            handleSubmit(formData, products, userId)
        }}>
            
            <input 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Name" 
                value= {name} 
                name= "name" 
                type="text" 
                onChange={handleChange} 
            />
            <br/>
            <input 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Price" 
                value= {price} 
                name= "price" 
                type="integer" 
                onChange={handleChange} 
            />
            <br/>
            <label>
                <textarea  
                    className= "form-control" 
                    name= "description" 
                    placeholder= "Enter your product Description here" 
                    onChange={handleChange} 
                    value= {description} >
                </textarea>
            </label>
            <br/>
            <input className="btn btn-outline-secondary" type="submit" value={editMode ? "update product" : "Post your product"}/>
        </form>    
    )
   
}


const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
      formData: state.productForm, 
      products: state.product, 
      userId
    }
}

export default connect(mapStateToProps, { updateProductForm}) (ProductForm);