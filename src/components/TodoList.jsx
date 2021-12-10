import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props);

    const deleteTodoHandler = (id) => {
        props.getTodoId(id);
    };
    
    const todos = [
        {
            id: "1",
            task: "Cleanup the toilet",
            date: "2021-11-25-10:00",
            completed: "No"
        },
        {
            id: "2",
            task: "Cut the grass",
            date: "2021-11-24-09:30",
            completed: "No"
        }
    ];
    const renderTodoList = todos.map((todo) => {
        return <Todo todo={todo} clickHandler={deleteTodoHandler} key={todo.id} />;
    });
    
    return <div className="ui celled list">{renderTodoList}</div>;
};

export default TodoList
