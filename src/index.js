import ReactDOM from "react-dom";
import React, { Component } from "react";

import SearchContainer from "./components/search-container";
import ResultContainer from "./components/result-container";

import "./style.css";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      stokedonly: false,
    };
  }

  search = (query) => {
    this.setState({ query: query });
  };
  stoking = () => {
    this.setState({ stokedonly: !this.state.stokedonly });
  };
  render() {
    return (
      <div className="container">
        <SearchContainer search={this.search} stoking={this.stoking} />
        <ResultContainer
          query={this.state.query}
          stokedonly={this.state.stokedonly}
          data={data}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
