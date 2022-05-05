import React, { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ReastaurantElement from "../components/ReastaurantElement";
import retrieveRestaurantList from "../dataLoaders/retrieveRestaurantList";

export default class RestaurantListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      loadingData: false,
    };
  }

  componentDidMount() {
    this.setState({ loadingData: true, })
    retrieveRestaurantList((error, result) => {
      if(error) {
        console.error(`error in RestaurantListPage componentDidMount ${error}`);
      } else {
        this.setState({ restaurants: result });
      }
      this.setState({ loadingData: false, })
    });
  }

  render() {
    const { restaurants, loadingData } = this.state;
    
    if(loadingData) {
      return <Spinner animation="grow" variant="secondary" />
    }

    return (
      <>
        <Row>
            {restaurants.map((restaurant, index) => (
              <Col md={3} key={index} className='mt-2'>
                <ReastaurantElement
                  id={restaurant.id}
                  name={restaurant.name}
                  description={restaurant.description}
                  image={restaurant.image}
                />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}
