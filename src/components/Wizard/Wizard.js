import React, { Component } from "react";
// import { connect } from "react-redux";
import axios from "axios";
import { connect } from "react-redux";
import { addHouse } from "../../redux/ducks/housesReducer";

class Wizard extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, address, city, state, zipcode } = this.state;
    if (name && address && city && state && zipcode) {
      axios
        .post("/api/houses", {
          name,
          address,
          city,
          state,
          zipcode
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log(response);
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.name}
            onChange={this.onChangeHandler}
            name="name"
            placeholder="Property Name..."
            type="text"
          />
          <input
            value={this.state.address}
            onChange={this.onChangeHandler}
            name="address"
            placeholder="Address..."
            type="text"
          />
          <input
            value={this.state.city}
            onChange={this.onChangeHandler}
            name="city"
            placeholder="City..."
            type="text"
          />
          <input
            value={this.state.state}
            onChange={this.onChangeHandler}
            name="state"
            placeholder="State..."
            type="text"
          />
          <input
            value={this.state.zipcode}
            onChange={this.onChangeHandler}
            name="zipcode"
            placeholder="Zipcode..."
            type="text"
          />
          <button>Add House</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addHouse }
)(Wizard);
