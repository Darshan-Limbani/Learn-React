import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
import {useContext} from "react";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    console.log("=========", cartCtx.items)

    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)

    // console.log("HeaderCartButton : ", props.onClick)
    // console.log("HeaderCartButton : ", numberOfCartItems)
    // console.log("HeaderCartButton : ", cartCtx.items)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )

}


export default HeaderCartButton