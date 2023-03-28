import Todos from "./components/Todos";
import './App.css';
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)
        setTodos((prevTodo) => {
            return prevTodo.concat(newTodo)
        })
    }

    const removeTodoHandler = (todoId: string) => {

        setTodos((prevTodo) => {
            return prevTodo.filter(todo => todo.id !== todoId)
        })

    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos onRemoveTodo={removeTodoHandler} items={todos}/>
        </div>
    );
}

export default App;
