import Card from "../UI/Card";
import classes from './Adduser.module.css'
import Button from '../UI/Button'
import {useState} from "react";

const AddUsers = props => {


    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault()
        console.log(enteredUsername, enteredAge)

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if (+enteredAge < 1) {
            return;
        }

        setEnteredUsername('')
        setEnteredAge('')
    }


    const usernameChaneHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (<Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChaneHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler}/>
                <Button>Add User</Button>
            </form>
        </Card>)
}

export default AddUsers

