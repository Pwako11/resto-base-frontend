const initialState = {
    name: "",
    price: "", 
    description: ""
}

export default function newProductForm (state=initialState, action) {
    switch(action.type){
        case "UPDATE_PRODUCT_FORM":
            return action.formData
        case "RESET_PRODUCT_FORM":
            return initialState
        default:
            return state
    }
}