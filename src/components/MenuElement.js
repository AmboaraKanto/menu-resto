import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class MenuElement extends Component {
  render() {
    const { menu } = this.props;

    return (
      <Card bg="light" text="dark" style={{ width: "18rem" }} className="mb-2">
        <Card.Header>{menu.category}</Card.Header>
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>
            {menu.details}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
