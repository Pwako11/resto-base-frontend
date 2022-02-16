const initialState = {
    name: "",
    price: "",
    user_id: "", 
    description: ""
}

export default function productForm (state=initialState, action) {
    switch(action.type){
        case "UPDATE_PRODUCT_FORM":
            console.log("in newProductForn- update product form", action.formData)
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }
        case "RESET_PRODUCT_FORM":
            return initialState
        case "PRE_SET_FORM_DATA_FOR_EDIT":
            return action.productFormData
        default:
            return state
    }
}