import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {

    const cart = useSelector((state) => state.cart)
    const showCart = useSelector(state => state.ui.cartIsVisible)
    const notification = useSelector(state => state.ui.notification)

    const dispatch = useDispatch();

    useEffect(() => {
        const sendCartData = async () => {


            const response = await fetch('https://react-http-7c896-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            }))

            const data = await response.json();
        }

        if (isInitial) {
            isInitial = false;
            return
        }

        sendCartData().catch(err => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart failed!',
            }))
        })
    }, [cart, dispatch]);


    return (

        <Fragment>
            {notification &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
