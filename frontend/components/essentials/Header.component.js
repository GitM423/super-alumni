import Link from "next/link";
import React, { Component } from "react";

import axios from "axios";

class Header extends Component {
  // static async getInitialProps(ctx) {
  //   let cookieName = "super-session=s%3A";
  //   console.log(cookieName);
  //   return { cookieName };
  // }

  constructor(props) {
    super(props);
    this.toggleNavigation = this.toggleNavigation.bind(this);

    this.state = {
      expanded: false,
    };
    // console.log(this.props);
  }
  // static async getInitialProps(ctx) {
  //   let cookieName = "super-session=s%3A";
  //   let cookie = ctx.req.headers.cookie.substr(
  //     ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
  //     32
  //   );
  //   console.log(cookie);

  //   const response = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${cookie}`
  //   );
  //   if (response.data.status === "Session active") {
  //     return {
  //       loggedIn: true,
  //       userId: response.data.userId,
  //     };
  //   } else {
  //     return {
  //       loggedIn: false,
  //     };
  //   }
  // }

  toggleNavigation() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <header id="Header">
        <nav>
          <Link href="/">
            <a>super(code)</a>
          </Link>
          <div className="menuToggle" onClick={this.toggleNavigation}>
            <img className="MenuButtonImg" src="/MenuButton.svg" alt="" />
          </div>
        </nav>

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
            <li>
              <Link href="/pool">
                <a>Pool</a>
              </Link>
            </li>

            {this.state.loggedIn && (
              <li>
                <Link href="/profile/info/">
                  <a>Profil</a>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
          }
          #Header,
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
            background-color: rgb(3, 0, 15);
            height: 10vh;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 5;
          }

          #Header nav > a {
            color: white;
            font-family: "neue-machina-light", sans-serif;
            text-decoration: none;
            font-size: 25px;
          }
          .expanded-navigation {
            position: fixed;
            width: 100%;
            height: 100vh;
            // margin: -80px 0px 0 0;
            // padding-top: 300px;
            top: 0;
            left: 0;
            display: flex;
            z-index: 4;
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
