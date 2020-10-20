import React, { Component } from "react";
import axios from "axios";

import OrdersCard from "./OrdersCard.component";

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.ordersList = this.ordersList.bind(this);
    this.loadList = this.loadList.bind(this);

    this.state = {};
  }

  loadList() {
    axios
      .get("http://localhost:5000/api/orders")
      .then((response) => {
        // console.log("Data: ", response);
        this.setState({
          ordersList: response.data,
          ordersListLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ordersList() {
    return this.state.ordersList.map((order) => {
      let check = true;
      this.props.activeFilterTags.map((activeTag) => {
        if (
          !order.workingHours.includes(activeTag) &&
          !order.field.includes(activeTag) &&
          !order.skills.includes(activeTag) &&
          this.props.activeFilterTags != []
        ) {
          check = false;
        }
      });
      if (check) {
        return <OrdersCard order={order} />;
      }
    });
  }

  render() {
    return (
      <section className="orders-list">
        {this.state.ordersListLoaded ? this.ordersList() : this.loadList()}

        <style jsx>{`
          .orders-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 5em;
          }
        `}</style>
      </section>
    );
  }
}

export default OrdersList;
