import Card from "../UI/Card";
import classes from './Adduser.module.css'
import Button from '../UI/Button'
import {Fragment, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault()
        // console.log(enteredUsername, enteredAge)

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input', message: 'Please enter a valid name and age (non empty value).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'invalid age', message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }


    const usernameChaneHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (<Fragment>
        {error && <ErrorModal title={"An Error occurred!"} message={"Something went Wrong!"}
                              onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChaneHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    </Fragment>)
}

export default AddUsers

