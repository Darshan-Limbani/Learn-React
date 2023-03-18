import {useRef, useState} from "react";

const SimpleInput = (props) => {

    const nameInputRef = useRef()
    const [enteredName, setEnteredName] = useState('');


    const nameInputChangeHandler = event => {
        console.log(event.target.value)
        setEnteredName(event.target.value)
        // console.log(nameInputRef.current.value)
    }


    const formSubmissionHandler = event => {
        event.preventDefault()

        if (enteredName.trim() === '') {
            return;
        }

        console.log(enteredName)
        console.log(nameInputRef.current.value)
    }

    return (<form onSubmit={formSubmissionHandler}>
        <div className='form-control'>
            <label htmlFor='name'>Your Name</label>
            <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler}/>
        </div>
        <div className="form-actions">
            <button>Submit</button>
        </div>
    </form>);
};

export default SimpleInput;
