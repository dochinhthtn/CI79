import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";

export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ListGroup.Item>
            <div className="d-flex justify-content-between align-items-center">
                <Badge bg="primary">#{this.props.id}</Badge>
                <Button variant="success">Done</Button>
            </div>
            <h3>{this.props.title}</h3>
            <div className="text-secondary">{this.props.deadline}</div>
            <p>{this.props.description}</p>
        </ListGroup.Item>;
    }
}