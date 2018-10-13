import React, { Component } from "react";
import "./Searchfield.scss";
import { withRouter } from "react-router-dom";

class Searchfield extends Component {
  state = {
    category: "",
    input: ""
  };

  changeHandler = (event, attribute) => {
    this.setState({
      [attribute]: event.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    // Dispatch an action to fetch results based on search
  };
  render() {
    return (
      <form
        className="Searchfield__form"
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <select
          required
          onChange={event => this.changeHandler(event, "category")}
        >
          <option value="" default>
            Product Category
          </option>
          <option value="Clothing">Clothing</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Music">Music</option>
          <option value="Posters">Posters</option>
          <option value="T-shirts">T-shirts</option>
          <option value="Albums">Albums</option>
          <option value="Hot products">Hot products</option>
          <option value="Uncategorized">Uncategorized</option>
        </select>
        <input
          type="text"
          required
          name="search"
          placeholder="Search..."
          onChange={event => this.changeHandler(event, "input")}
        />
        <button>
          <i className="fas fa-search" />
        </button>
      </form>
    );
  }
}

export default withRouter(Searchfield);
