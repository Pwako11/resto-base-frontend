// synchronous action creators
export const updateProductForm = formData => {
    return {
      type: "UPDATE_DISH_FORM",
      formData
    }
  }
  
  export const resetProductForm = () => {
    return {
      type: "RESET_DISH_FORM"
    }
  }