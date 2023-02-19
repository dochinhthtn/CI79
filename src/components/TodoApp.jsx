import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Container, ListGroup } from "react-bootstrap";
import AddTodoItemForm from "./AddTodoItemForm";

class TodoApp extends React.Component {

    state = {
        tasks: [
            { id: 1, title: 'Task 1', description: 'Mua socola cho crush', deadline: '2023/02/13', isDone: false },
            { id: 2, title: 'Task 2', description: 'Tặng quà cho crush', deadline: '2023/02/14', isDone: false },
        ]
    };

    addTask = (title, description, deadline) => {
        // console.log('chạy addTask từ TodoApp', title, description, deadline);
        const newTask = {
            id: Date.now(),
            title,
            description,
            deadline,
            isDone: false
        };

        const newState = { ...this.state };
        newState.tasks.push(newTask);

        this.setState(newState);
    }

    constructor(props) {
        super(props);
    }

    render() {
        const tasks = this.state.tasks;

        return <Container className="todo-app">
            <h1>This is todo app</h1>
            <p>Name: {this.props.name}</p>
            <p>Owner: {this.props.owner}</p>
            <p>Created At: {this.props.createdAt}</p>

            <AddTodoItemForm onAddTask={this.addTask} />

            <hr />

            <ListGroup>
                {tasks.map(task => <TodoItem key={task.id} {...task} />)}
            </ListGroup>
        </Container>;
    }
}

export default TodoApp;

// function TodoApp() {
//     const [s1, setS1] = useState();
//     const [s2, setS2] = useState();

//     return <></>
// }