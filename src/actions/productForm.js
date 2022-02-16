// synchronous action creators

export const updateProductForm = (name, value) => {
  return {
    type: "UPDATE_PRODUCT_FORM",
    formData: {name, value}
  }
}
  
export const resetProductForm = () => {
  return {
    type: "RESET_PRODUCT_FORM"
  }
}


export const preSetFormDataForEdit = product => {
  console.log ("Action productForm value for product" , product)
  
  const productFormData = {
      name: product.attributes.name,
      price: product.attributes.price, 
      user_id: product.relationships.user.data.id, 
      description: product.attributes.description
  }

  return{
      type: "PRE_SET_FORM_DATA_FOR_EDIT",
      productFormData
  } 

} 