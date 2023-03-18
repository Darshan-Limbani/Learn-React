import useInput from "../hooks/use-input";

const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim().includes('@'))

    let formIsValid = false;

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        if (!enteredFirstName && !enteredLastName && enteredEmail) {
            return;
        }

        resetFirstNameInput()
        resetLastNameInput()
        resetEmailInput()

    }

    const errorMsg = (inputField,msg) => {
        return inputField && <p className={'error-text'}>{msg}</p>
    }

    const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name'
                           onChange={firstNameChangeHandler}
                           onBlur={firstNameBlurHandler}
                    />
                    {errorMsg(firstNameInputHasError,'First Name must not be Empty!!')}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name'
                           onChange={lastNameChangeHandler}
                           onBlur={lastNameBlurHandler}/>
                    {errorMsg(lastNameInputHasError,'Last Name must not be Empty!!')}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                />
                {errorMsg(emailInputHasError,'Email id should be valid!!')}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
