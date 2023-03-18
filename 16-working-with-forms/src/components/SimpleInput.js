import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')


    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true
    }


    // const nameInputChangeHandler = event => {
    //     // console.log(event.target.value)
    //     setEnteredName(event.target.value)
    //
    //     // console.log(nameInputRef.current.value)
    // }

    // const nameInputBlurHandler = event => {
    //     setEnteredNameTouched(true);
    // }

    const formSubmissionHandler = event => {
        event.preventDefault()

        if (!enteredNameIsValid) {
            return;
        }

        resetNameInput();
        console.log(enteredName)

        // console.log(nameInputRef.current.value)
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

    return (<form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input onBlur={nameBlurHandler} type='text' id='name' value={enteredName}
                   onChange={nameChangeHandler}/>
        </div>
        {nameInputHasError && <p className={'error-text'}>Name must not be empty!</p>}
        <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>);
};

export default SimpleInput;
