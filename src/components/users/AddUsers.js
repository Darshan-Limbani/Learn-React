import Card from "../UI/Card";
import classes from './Adduser.module.css'
import Button from '../UI/Button'

const AddUsers = props => {
    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Card className ={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="text"/>
                <Button>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUsers

