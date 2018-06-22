import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { getHouses } from "../../redux/ducks/housesReducer";

class Dashboard extends Component {
  // state = {
  //   houses: []
  // };

  componentDidMount() {
    axios.get("http://localhost:8080/api/houses").then(response => {
      console.log(response.data);
      this.setState({ houses: response.data });
      console.log(this.state);
    });
  }

  render() {
    const { isLoading, houses } = this.props;
    const housesDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      houses.map(houses => {
        return (
          <div>
            <p>{houses.name}</p>
            <p>{houses.address}</p>
            <p>{houses.city}</p>
            <p>{houses.state}</p>
            <p>{houses.zipcode}</p>
          </div>
        );
      })
    );

    return (
      <div>
        <h1>Dashboard</h1>
        {housesDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getHouses }
)(Dashboard);
