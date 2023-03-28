import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[],onRemoveTodo :(todoId:string )=>void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {
                props.items.map(item =>
                    (<TodoItem onRemoveTodo={props.onRemoveTodo.bind(null,item.id)} key={item.id} text={item.text}/>)
                )
            }
        </ul>
    )

}

export default Todos