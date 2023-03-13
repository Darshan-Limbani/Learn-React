import './App.css';
import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";

function App() {
    return (
        <div>
            <AddUsers/>
            <UsersList users={[]}/>
        </div>
    );
}

export default App;
