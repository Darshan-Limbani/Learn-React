import Card from "../UI/Card";
import classes from './Adduser.module.css'
import Button from '../UI/Button'
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = props => {


    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault()
        // console.log(enteredUsername, enteredAge)

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
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

    return (

        <div>
            <ErrorModal title={"An Error occurred!"} message ={"Something went Wrong!"} ></ErrorModal>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChaneHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </div>)
}

export default AddUsers

