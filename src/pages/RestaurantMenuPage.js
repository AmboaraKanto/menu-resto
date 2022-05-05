import React, { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import MenuElement from "../components/MenuElement";
import retrieveRestaurantMenuById from "../dataLoaders/retrieveRestaurantMenuById";
import withParams from "../hooks/withParams";

class RestaurantMenuPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: null,
      loadingData: false,
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const id = params.restaurantId;

    this.setState({ loadingData: true });
    retrieveRestaurantMenuById(id, (err, res) => {
      if (err) {
        console.error(`error in RestaurantMenuPage componentDidMount ${err}`);
      } else {
        this.setState({ menus: res });
      }
      this.setState({ loadingData: false });
    });
  }

  render() {
    const { loadingData, menus } = this.state;

    if (loadingData) {
      return <Spinner animation="grow" variant="secondary" />
    }

    return (
      <>
        <Row>
          {menus && menus.map((menu, index) => (
            <Col md={3} key={index} className="mt-2">
                <MenuElement menu={menu} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default withParams(RestaurantMenuPage);
