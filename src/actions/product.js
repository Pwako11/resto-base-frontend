import { resetProductForm } from './newProductForm.js'


//synchronous action creators 

export const setProduct = product =>{
    return{
        type: "SET_MY_PRODUCT",
        product
    }
}

export const addProduct = Product =>{
    return{
        type: "ADD_PRODUCT",
        Product
    }
}

export const updateProductSuccess = Product => {
    return{
        type: "UPDATE_PRODUCT",
        Product
    }
}

export const clearProduct = () =>{
    return {
        type: "CLEAR_CURRENT_PRODUCT"
    }
}

export const deleteProductSuccess = Product => {
    return{
        type: "DELETE_PRODUCT",
        Product
    }
}

//asynchronous action creators
export const getProducts = () =>{
    return dispatch =>{
        return fetch("http://localhost:3006/api/v1/Products", {
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


export const createProduct = (productDetails, history) => {
    let newData;

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
                newData = response.data
                dispatch(setProduct(response.data));
                dispatch(resetProductForm());
                history.push(`/`)
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