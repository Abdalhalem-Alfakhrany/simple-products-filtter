import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = !product.stocked ? (
      <span style={{ color: "red" }}>{product.name}</span>
    ) : (
      this.props.product.name
    );
    return (
      <tr>
        <th>{name}</th>
        <th>{product.price}</th>
      </tr>
    );
  }
}

class CategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th style={{ padding: 10 }} colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ResultContainer extends Component {
  render() {
    let rows = [];
    let lastCategory = null;
    this.props.data.map((Element) => {
      if (Element.name.indexOf(this.props.query) === -1) {
        return;
      }
      if (this.props.stokedonly && !Element.stocked) {
        return;
      }
      if (Element.category !== lastCategory) {
        rows.push(<CategoryRow category={Element.category} />);
      }
      lastCategory = Element.category;
      rows.push(<ProductRow product={Element} />);
    });

    return (
      <div className="searchResult-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ResultContainer;
