import './App.css';
import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";
import {useState} from "react";

function App() {

    const [usersList,setUsersList] = useState([])


    const addUserHandler = (uName,uAge)=>{
    setUsersList((prevUserList)=>{
        return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
    }


    return (
        <div>
            <AddUsers onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
