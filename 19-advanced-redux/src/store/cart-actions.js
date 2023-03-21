import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";
import cart from "../components/Cart/Cart";


export const fetchCartData = () => {
    return async (dispatch) => {

        const fetchData = async () => {

            const response = await fetch('https://react-http-7c896-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }

            const data = await response.json()
            return data;
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart failed!',
            }))
        }

    }
}


export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
        }))
        const sendRequest = async () => {
            const response = await fetch('https://react-http-7c896-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cartData.items,
                    totalQuantity: cartData.totalQuantity
                })
            })

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }

        }

        try {
            await sendRequest()
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            }))
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart failed!',
            }))
        }

    }
}
