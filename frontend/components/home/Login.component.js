import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onSubmitGoogle = this.onSubmitGoogle.bind(this);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onChangeLogin = this.onChangeLogin.bind(this);

    this.state = {
      page: "google",
      email: "",
      password: "",
      msg: [],
      google: true,
    };
  }

  onChangeLogin() {
    this.setState({ google: !this.state.google });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmitLogin(e) {
    e.preventDefault();

    // axios.defaults.withCredentials = true;
    axios
      .post(
        "http://localhost:5000/auth/login",
        {
          email: this.state.email,
          password: this.state.password,
        }
        // {
        //   withCredentials: true,
        // }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);

          localStorage.setItem("auth-token", res.data.token);
          if (res.data.status === "ok") {
            this.setState({ msg: res.data.msg });

            console.log(res.data);

            this.props.router.push("/dashboard");
          } else {
            this.setState({ msg: res.data.msg });
            console.log(res.data);
          }
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  }

  onSubmitGoogle(e) {
    e.preventDefault();

    axios.get("http://localhost:5000/auth/google");

    // .then((res) => {
    //   if (res.status === 200) {
    //     if (res.data.status === "ok") {
    //       this.setState({ msg: res.data.msg });

    //       console.log(res.data);

    //       // this.props.router.push("/dashboard");
    //     } else {
    //       this.setState({ msg: res.data.msg });
    //       console.log(res.data);
    //     }
    //   }
    // });
  }

  render() {
    return (
      <main id="login">
        {this.state.google ? (
          <div className="grid">
            <section>
              <div>
                <h1>Super</h1>
                <h1>Alumni</h1>
              </div>
            </section>
            <section>
              <h2>Welcome!</h2>
              <p>
                Log in/sign in to <span>create</span>, <span>discover</span> and{" "}
                <span>connect</span> with the Super Alumni community
              </p>
              <Link href="http://localhost:5000/auth/google">
                <button className="btn login-btn google-btn" type="submit">
                  <img src="/google-icon.png" alt=""></img>
                  Sign in with Google
                </button>
              </Link>
              <div className="login-switch">
                <button className="btn btn-black" onClick={this.onChangeLogin}>
                  Login with Password
                </button>
              </div>
            </section>
          </div>
        ) : (
          <div className="grid">
            <section>
              <div>
                <h1>Super</h1>
                <h1>Alumni</h1>
              </div>
            </section>
            <section>
              <div>
                {this.state.msg.map((error) => {
                  return <h1> {error.msg}</h1>;
                })}
              </div>
              <form onSubmit={this.onSubmitLogin}>
                <fieldset>
                  <input
                    value={this.state.email}
                    type="email"
                    placeholder="Email*"
                    onChange={this.onChangeEmail}
                  ></input>
                  <input
                    value={this.state.password}
                    type="password"
                    placeholder="Password*"
                    onChange={this.onChangePassword}
                  ></input>
                </fieldset>
                <input
                  className="btn btn-black"
                  type="submit"
                  value="Login"
                ></input>
              </form>
              <div className="login-switch">
                <button className="btn btn-black" onClick={this.onChangeLogin}>
                  Google Login
                </button>
              </div>
              <div>
                Noch nicht registriert?{" "}
                <Link href="/register">
                  <a>Zur Registrierung</a>
                </Link>
              </div>
            </section>
          </div>
        )}

        <style jsx>{`
          form {
            margin: 10%;
            width: 50%;
          }
          fieldset {
            display: flex;
            flex-direction: column;
          }
          fieldset input {
            padding: 0.5rem 0.5rem;
          }

          .login-switch {
            margin: 2rem;
          }

          #login {
            font-family: "neue-machina-light", sans-serif;
          }
          .grid {
            min-height: 100vh;

            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          section:nth-of-type(1) {
            color: rgb(61, 215, 172);
            background: linear-gradient(
                  90deg,
                  rgb(3, 0, 15) 68.3333px,
                  transparent 1%
                )
                0% 0% / 69.3333px 69.3333px,
              linear-gradient(rgb(3, 0, 15) 68.3333px, transparent 1%),
              rgb(255, 255, 255);
            background-size: 69.3333px 69.3333px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          section:nth-of-type(1) div {
            text-align: center;
          }
          section:nth-of-type(1) h1 {
            font-size: 9em;
          }
          section:nth-of-type(1) h1:nth-of-type(1) {
            -webkit-text-stroke: 2px #3dd7ac;
            -webkit-text-fill-color: #03000f;
            font-weight: 100;
            font-family: "neue-machina-light", sans-serif;
          }
          section:nth-of-type(1) h1:nth-of-type(2) {
            color: #3dd7ac;
          }
          section:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          section:nth-of-type(2) h2 {
            font-size: 3em;
            text-transform: uppercase;
          }
          section:nth-of-type(2) p {
            padding: 2em;
            text-align: center;
          }
          section:nth-of-type(2) p span {
            font-family: "neue-machina-regular", sans-serif;
            font-size: 1.1em;
          }
          .btn {
            font-family: "neue-machina-regular", sans-serif;
            text-decoration: none;
            text-align: center;
            transition: top 0.5s linear 0s, box-shadow 0.5s linear 0s,
              left 0.5s linear 0s;
            min-width: 200px;
            height: 50px;
            letter-spacing: 1px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .login-btn {
            border: none;
            border-radius: 5px;
            color: white;
            padding: 13px 20px;
            min-width: 300px;
            height: 45px;
            font-size: 0.9em;
            transition: all 0.5s;
          }
          .google-btn {
            color: white;
            background: #03000f;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #03000f;
          }
          .google-btn:hover {
            background: white;
            color: #2d3748;
            border: 2px solid #03000f;
          }
          .google-btn img {
            padding-right: 1em;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            section:nth-of-type(1) h1 {
              font-size: 6em;
            }
            .grid {
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;
            }
          }
          @media (min-width: 320px) and (max-width: 767px) {
            #register {
              display: grid;
              grid-template-columns: 1fr;
            }
            section:nth-of-type(1) h1 {
              font-size: 6em;
            }
            section:nth-of-type(2) h2 {
              font-size: 2em;
              text-transform: uppercase;
            }
            .grid {
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </main>
    );
  }
}

export default withRouter(Login);
