import React, { Component } from "react";
import Link from "next/link";

class OrdersCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.order);
    return (
      <article className="orders-card">
        <div className="orders-card-title">{this.props.order.jobtitle}</div>
        <div className="orders-card-content">
          <div className="orders-card-image">
            <img src={this.props.order.imageUrl} alt="" />
          </div>
          <div className="orders-card-description">
            <h2>{this.props.order.companyName}</h2>
            <h3>
              {this.props.order.jobtask} - {this.props.order.budget},00 €
            </h3>
            <p>{this.props.order.description}</p>
            <Link href="">
              <button className="btn btn-black">Erfahre mehr</button>
            </Link>
          </div>
        </div>

        <style jsx>{`
          .orders-card {
            display: flex;
          }

          .orders-card .orders-card-title {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            justify-content: flex-end;
            padding-left: 1rem;
            text-transform: uppercase;
          }

          .orders-card .orders-card-content {
            display: flex;
          }

          .orders-card .orders-card-image {
            display: flex;
            justify-content: center;
            align-items: center;
            object-fit: contain;
            overflow: hidden;
            max-height: 15rem;
            max-width: 15rem;
          }

          .orders-card img {
            width: 100%;
          }

          .orders-card .orders-card-description {
            padding-left: 2rem;
          }

          .orders-card .orders-card-description h2 {
            padding: 0 0 2rem;
            font-size: 1.9rem;
          }

          .orders-card .orders-card-description p {
            font-size: 1.4rem;
            letter-spacing: 0.1rem;
            word-spacing: 0.2rem;
            line-height: 2.5rem;
            padding-bottom: 1rem;
          }
        `}</style>
      </article>
    );
  }
}

export default OrdersCard;
