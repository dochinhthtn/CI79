import React from "react";
import { Button, Form } from "react-bootstrap";

export default class AddTodoItemForm extends React.Component {

    handleForm = (event) => {
        event.preventDefault();
        const $form = event.target;

        let title = $form.title.value;
        let deadline = $form.deadline.value;
        let description = $form.description.value;

        // kiểm tra dữ liệu đầu vào

        this.props.onAddTask(title, deadline, description);
    }

    constructor(props) {
        super(props);
    }

    render() {

        return <Form onSubmit={this.handleForm}>
            <h2>Create Task </h2>
            <Form.Control type="text" name="title" placeholder="Title" className="mb-3" />
            <Form.Control type="date" name="deadline" placeholder="Deadline" className="mb-3" />
            <Form.Control as="textarea" name="description" rows={3} placeholder="Description" className="mb-3" />
            <Button type="submit" variant="primary">Submit</Button>
        </Form>;
    }
}