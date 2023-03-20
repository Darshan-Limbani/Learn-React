import classes from './Checkout.module.css'
import {useContext, useRef, useState} from "react";
import CartContext from "../../store/cart-context";

const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim.length === 5

const Checkout = props => {


    const cartCtx = useContext(CartContext);

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalIsValid = !isFiveChar(enteredPostal)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredCityIsValid,
        })

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalIsValid && enteredStreetIsValid;
        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredPostal,
            postalCode: enteredCity,
        })
    }


    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`
    const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`

    const isItems = cartCtx.items.length > 0

    return <form onSubmit={confirmHandler} className={classes.form} hidden={!isItems}>
        <div className={nameControlClasses}>
            <label htmlFor={'name'}>Your Name</label>
            <input type={'text'} id={'name'} ref={nameInputRef}/>
            {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor={'street'}>Street</label>
            <input type={'text'} id={'street'} ref={streetInputRef}/>
            {!formInputValidity.street && <p>Please enter a valid Street!</p>}
        </div>
        <div className={postalControlClasses}>
            <label htmlFor={'postal'}>Postal Code</label>
            <input type={'text'} id={'postal'} ref={postalInputRef}/>
            {!formInputValidity.postalCode && <p>Please enter a valid Postal Code(5 digit code)!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor={'city'}>City</label>
            <input type={'text'} id={'city'} ref={cityInputRef}/>
            {!formInputValidity.city && <p>Please enter a valid City!</p>}
        </div>

        <div className={classes.actions}>
            <button type={'button'} onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>


}

export default Checkout