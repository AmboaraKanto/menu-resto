import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class ReastaurantElement extends Component {
  render() {
    const { name, description, image, id } = this.props;
    let imageUrl = image || "https://via.placeholder.com/100x100"

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary" href={`/menu/${name}`}>Voir les menus</Button>
        </Card.Body>
      </Card>
    );
  }
}
