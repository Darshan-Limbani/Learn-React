import {useRef, useState} from "react";

const SimpleInput = (props) => {

    const nameInputRef = useRef()
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);


    const nameInputChangeHandler = event => {
        // console.log(event.target.value)
        setEnteredName(event.target.value)
        // console.log(nameInputRef.current.value)
    }


    const formSubmissionHandler = event => {
        event.preventDefault()
        setEnteredNameTouched(true)

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false)
            return;
        }
        setEnteredNameIsValid(true)

        console.log(enteredName)
        // console.log(nameInputRef.current.value)
    }


    const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (<form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler}/>
        </div>
        {enteredNameTouched && <p className={'error-text'}>Name must not be empty!</p>}
        <div className="form-actions">
            <button>Submit</button>
        </div>
    </form>);
};

export default SimpleInput;
