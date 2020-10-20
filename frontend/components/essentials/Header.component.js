import Link from "next/link";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavigation = this.toggleNavigation.bind(this);

    this.state = {
      expanded: false,
    };
  }

  toggleNavigation() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <header id="Header">
        <Link href="/">
          <a>super(code)</a>
        </Link>
        <div className="menuToggle" onClick={this.toggleNavigation}>
          <img className="MenuButtonImg" src="/MenuButton.svg" alt="" />
        </div>

        <div
          className={this.state.expanded ? "expanded-navigation" : " hidden"}
        >
          <ul className="menu">
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
          }
          #Header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 5px;
            background-color: rgb(3, 0, 15);
            height: 10vh;
            position: relative;
          }

          #Header > a {
            color: white;
            font-family: "neue-machina-light", sans-serif;
            text-decoration: none;
            padding-left: 50px;
            font-size: 25px;
          }
          .expanded-navigation {
            position: absolute;
            width: 100%;
            height: 100vh;
            // margin: -80px 0px 0 0;
            // padding-top: 300px;
            top: 10vh;
            right: 0;
            display: flex;
            z-index: 10;
            justify-content: center;
            align-items: center;
            background: rgb(3, 0, 15);
          }

          .menu li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px 0;
            font-size: 22px;
            color: #3dd7ac;
            list-style: none;
          }

          .menu a {
            text-decoration: none !important;
            color: #3dd7ac;
            transition: 0.3s ease;
            font-size: 40px;
          }
          .menu a:hover {
            opacity: 0.3;
          }
          .menuToggle {
          }
          .menuToggle:hover {
            cursor: pointer;
          }

          .hidden {
            display: none;
          }

          @media (min-width: 320px) and (max-width: 767px) {
            #Header > a {
              font-size: 15px;
              margin-left: -40px;
            }
          }
        `}</style>
      </header>
    );
  }
}

export default Header;
