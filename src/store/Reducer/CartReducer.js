const INITAL_VALUE = {
    cartProduct: []
}

const CartReducer = (state = INITAL_VALUE , action) => {
    if(action.type === 'ADD'){
        const newProduct = {
            product:action.payload.product,
            quantity:action.payload.quantity
        }
        let indexUpdate = state.cartProduct.findIndex(item => item.product.title === newProduct.product.title)
        if(indexUpdate !== -1){
            state.cartProduct[indexUpdate].quantity += newProduct.quantity
            return {
                cartProduct: state.cartProduct,
            }
        }else{
            state.cartProduct.push(newProduct)
            return {
                cartProduct: state.cartProduct,
            }
        }
    }else{
        return state
    }
}


export default CartReducer