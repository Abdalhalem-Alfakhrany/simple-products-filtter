import React, { Component } from "react";

class SearchContainer extends Component {
  handlechange = (e) => {
    this.props.search(e.target.value);
  };
  render() {
    return (
      <div className="search-contianer">
        <input type="text" placeholder="Search" onChange={this.handlechange} />
        <div>
          <input type="checkbox" onChange={() => this.props.stoking()} />
          <label>only show products in stocked</label>
        </div>
      </div>
    );
  }
}
export default SearchContainer;
