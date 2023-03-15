import CartContext from "./cart-context";
import {useReducer} from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if(action.type==="ADD"){
        const updatedItems = state.items.concat(action.items);
        const updatedTotalAmount = state.totalAmount + action.items.price *action.items.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {

        dispatchCartAction({
            type : 'ADD',
            item:item
        })
    }
    const removeItemFromCartHandler = id => {
    }

    const cartContext = {
        items: [],
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provier value={{cartContext}}>
        {props.children}
    </CartContext.Provier>
}

export default CartProvider