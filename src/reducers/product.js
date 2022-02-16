export default function product(state = [], action) {
    switch (action.type) {
        case "SET_MY_PRODUCT":
            return action.product
        case "ADD_PRODUCT":
            return state.concat(action.product)
        case "CLEAR_PRODUCT":
            return []
        case "UPDATE_PRODUCT":
            return state.map(product => product.id === action.product.id? action.product : product)
        case "DELETE_PRODUCT":
            return state.filter(product => product.id === action.productId ? false : true)
        default:
            return state 
    }   
   }