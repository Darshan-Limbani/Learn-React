import React, {useState} from 'react'
import Todo from "../models/Todo";


type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {
    },
    removeTodo: (id: string) => {
    }
})

interface Props{
    children : React.ReactNode
}

export const TodosContextProvider: React.FC<Props> = ({children}) => {

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

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
}

export default TodosContextProvider
