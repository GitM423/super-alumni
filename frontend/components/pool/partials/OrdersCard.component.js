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

        <div className="orders-card-image">
          <div className="orders-card-title">{this.props.order.jobtitle}</div>
          <img src={this.props.order.imageUrl} alt="" />
          
        </div>

        <div className="orders-card-content">
          {/* <div className="orders-card-description"> */}
            <h2>{this.props.order.companyName}</h2>
            <h3>
              {this.props.order.jobtask} - {this.props.order.budget},00 €
            </h3>
            <p>{this.props.order.description}</p>
            <Link href="">
              <button className="btn btn-black">Erfahre mehr</button>
            </Link>
          {/* </div> */}
        </div>

        <style jsx>{`
          .orders-card {
            // display: flex;
            // padding: 1em 0;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2em;
          }
          .orders-card-title {
            // writing-mode: vertical-lr;
            // transform: rotate(180deg);
      
            display: flex;
            justify-content: flex-start;
            // padding-left: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0.2em 0;

          }
          .orders-card .orders-card-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
          }
          .orders-card .orders-card-image {
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // overflow: hidden;
            // max-width: 20rem;
          }
          .orders-card-image{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
          }
          .orders-card img {
             object-fit: cover;
            width: 100%;
             max-height: 20rem;
          }
          .orders-card-content {
            // padding-left: 2rem;
          }
          .orders-card-content h2 {
            padding: 0 0 2rem;
            font-size: 1.9rem;
          }
          .orders-card-content p {
            font-size: 1rem;
            letter-spacing: 0.1rem;
            word-spacing: 0.2rem;
            line-height: 1.5rem;
            padding: 0.5em 0;
            font-family: "neue-machina-light", sans-serif;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .orders-card{
            grid-template-columns: 1fr 1fr;
          }
          .orders-card-content {
            padding-left: 0rem;
          }
           .orders-card-image{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
              }
            }
            @media (min-width: 320px) and (max-width: 767px) {
              .orders-card{
                grid-template-columns: 1fr;
                gap: 2em;
              }
              .orders-card-content {
                padding-left: 0rem;
              }
             
            
            }
        `}</style>
      </article>
    );
  }
}

export default OrdersCard;
