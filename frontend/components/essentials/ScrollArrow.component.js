import React from "react";

class ScrollArrow extends React.Component {
  state = {};
  render() {
    return (
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>

        <style jsx>{`
          .arrow {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 100px;
            // padding-bottom: 50px;
          }
          .arrow span {
            display: block;
            width: 30px;
            height: 30px;
            border-bottom: 2px solid rgba(61, 215, 172, 1);
            border-right: 2px solid rgba(61, 215, 172, 1);
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            margin: -10px;
            -webkit-animation: animate 2s infinite;
            animation: animate 2s infinite;
          }
          .arrow span:nth-child(2) {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
          }
          .arrow span:nth-child(3) {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
          }
          @-webkit-keyframes animate {
            0% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(-20px, -20px);
              -ms-transform: rotate(45deg) translate(-20px, -20px);
              transform: rotate(45deg) translate(-20px, -20px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(20px, 20px);
              -ms-transform: rotate(45deg) translate(20px, 20px);
              transform: rotate(45deg) translate(20px, 20px);
            }
          }
          @keyframes animate {
            0% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(-20px, -20px);
              -ms-transform: rotate(45deg) translate(-20px, -20px);
              transform: rotate(45deg) translate(-20px, -20px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(20px, 20px);
              -ms-transform: rotate(45deg) translate(20px, 20px);
              transform: rotate(45deg) translate(20px, 20px);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ScrollArrow;
