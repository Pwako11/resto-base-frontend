import React from 'react';
import {connect} from 'react-redux';
import {updateProduct} from "../actions/product.js";
import {preSetFormDataForEdit, resetProductForm} from "../actions/productForm.js";
import ProductForm from './ProductForm'

class ProductEditFormWrapper extends React.Component{
       
     componentDidMount(){
        this.props.product && this.props.preSetFormDataForEdit(this.props.product)
    }

     componentDidUpdate(prevProps){
        console.log("in componentDidUpdate - props are", this.props)
        console.log("in componentDidUpdate - Previous props are", this.prevProps) 
        this.props.product && !prevProps.product && this.props.preSetFormDataForEdit(this.props.product)
     }

    componentWillUnmount() {
        console.log("in componentWillUnmoint - props are", this.props)
        this.props.resetProductForm()
    }

    handleSubmit = (formData)=>{
        console.log( "product edit handle submit", )
        
        const {updateProduct, product, history } = this.props
        updateProduct(formData, product)
        .then((id)=> {
            console.log( "retrun of patch value is =", product.id)
            history.push(`/products/${product.id}`) 
        })
    } 
    
    render() {
        return <ProductForm editMode  handleSubmit={this.handleSubmit} />
    }
};

export default connect(null, {updateProduct, preSetFormDataForEdit, resetProductForm})(ProductEditFormWrapper);