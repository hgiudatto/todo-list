import React from 'react';

class AddTodo extends React.Component {

    state = {
        task: "",
        date: "",
        completed: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.task === "" && this.state.date === "") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.addTodoHandler(this.state);
        this.setState({task: "", date: "", completed: ""});
    };

    render() {
        return (
            <div className="ui main">
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Task</label>
                        <input type="text" 
                               name="task" 
                               placeholder="Task" 
                               value={this.state.task}
                               onChange={(e) => this.setState({ task: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Date</label>
                        <input type="text" 
                               name="date" 
                               placeholder="Date"
                               value={this.state.date}
                               onChange={(e) => this.setState({ date: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Completed</label>
                        <input type="text" 
                               name="completed" 
                               placeholder="Completed"
                               value={this.state.completed}
                               onChange={(e) => this.setState({ completed: e.target.value })}       
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }    
}

export default AddTodo;
