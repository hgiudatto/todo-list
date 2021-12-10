import React from 'react'

const Todo = (props) => {

    const {id, task, date, completed} = props.todo;

    return (
      <div className="item">
        <i
          className="check square outline icon"
          style={{ color: "blue", marginTop: "5px" }}
        ></i>
        <div className="content">
          <div className="header">{task}</div>
          <div>{date}</div>
          <div>{completed}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    );
}

export default Todo
