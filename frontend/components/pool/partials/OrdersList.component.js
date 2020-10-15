import React, { Component } from "react";
import axios from "axios";

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.ordersList = this.ordersList.bind(this);

    this.state = {};
  }

  ordersList() {}

  render() {
    return (
      <section className="orders-list">
        {this.ordersList()}
        <style jsx>{``}</style>
      </section>
    );
  }
}

export default OrdersList;
