import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
import {useContext, useEffect, useState} from "react";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const {items} = useContext(CartContext);

    // console.log("=========", cartCtx.items)

    const numberOfCartItems = items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)

    // console.log("HeaderCartButton : ", props.onClick)
    // console.log("HeaderCartButton : ", numberOfCartItems)
    // console.log("HeaderCartButton : ", cartCtx.items)
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => setBtnIsHighlighted(false), 300)

        return () => {
            clearTimeout(timer)
        }

    }, [items]);


    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )

}


export default HeaderCartButton