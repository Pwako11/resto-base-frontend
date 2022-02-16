import { resetProductForm } from './productForm.js'

//synchronous action creators 

export const setProduct = product =>{
    return{
        type: "SET_MY_PRODUCT",
        product
    }
}

export const addProduct = product =>{
    return{
        type: "ADD_PRODUCT",
        product
    }
}

export const updateProductSuccess = product => {
    return{
        type: "UPDATE_PRODUCT",
        product
    }
}

export const clearProduct = () =>{
    return {
        type: "CLEAR_PRODUCT"
    }
}

export const deleteProductSuccess = product => {
    return{
        type: "DELETE_PRODUCT",
        product
    }
}

//asynchronous action creators
export const getProducts = () =>{


    return dispatch =>{
        return fetch("http://localhost:3006/api/v1/products", {
            credentials: "include", 
            method: "GET", 
            headers:{
                "content-type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            }else{
                dispatch(setProduct(response.data))      
            }
        })
        .catch(console.log)
    }
}


export const createProduct = (productDetails, products, history) => {
    let newData;
    let productId;

    return dispatch => {

      const productInfo = {
        product: productDetails
      }

      console.log( "you are in createProduct", productInfo)

      return fetch("http://localhost:3006/api/v1/products", {
        credentials: "include",  
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productInfo)
      })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                newData = response.data;
                productId = newData.id;
            }    
            return dispatch(addProduct(response))
        }).then(()=>{
            dispatch(setProduct([...products, newData]));
        }).then(()=>{
            dispatch(resetProductForm());
        }).then(()=>{
            window.alert("Your product was successfull added")
            return productId
        })
        .catch(console.log)
    }
}

export const updateProduct = (productData, product) => {
   
    let updatedProduct;
    const productId = product.id
    
    return dispatch => {
        const setDataTransfer ={
            product: {
                name: productData.name,
                price: productData.price,
                user_id: productData.user_id,
                description: productData.description
            }
        }
          
        return fetch(`http://localhost:3006/api/v1/products/${productId}`, {
            credentials: "include",
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setDataTransfer)
            })
            .then( response => response.json())
            .then(response =>{
            updatedProduct = response.data
            if(response.error){
                alert(response.error)
            }else{
                dispatch(updateProductSuccess(updatedProduct))
            }
        })
        .catch(console.log)
    }
}

export const deleteProduct = (products, product, history) => {
    
    let updatedProducts; 

    const productId = product.id 

    return dispatch => {
        return fetch(`http://localhost:3006/api/v1/products/${productId}`, {
            credentials: "include",
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( resp => resp.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                updatedProducts = products.filter( product => product.id === productId ? false : true)
                dispatch(deleteProductSuccess(productId))
                history.push(`/products`)
            }
        }).then(()=>{
            dispatch(setProduct(updatedProducts))
        })
        .catch(console.log)
    }
}