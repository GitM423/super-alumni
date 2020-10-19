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

    this.state = {
      email: "",
      password: "",
      msg: [],
    };
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
      .post("http://localhost:5000/auth/login", {
        email: this.state.email,
        password: this.state.password,
      })
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
        <div>
          {this.state.msg.map((error) => {
            return <h1> {error.msg}</h1>;
          })}
        </div>
        <form onSubmit={this.onSubmitLogin}>
          <fieldset>
            <input
              value={this.state.email}
              type="text"
              placeholder="Email*"
              onChange={this.onChangeEmail}
            ></input>
            <input
              value={this.state.password}
              type="text"
              placeholder="Password*"
              onChange={this.onChangePassword}
            ></input>
          </fieldset>
          <input className="btn btn-black" type="submit" value="Login"></input>
        </form>
        {/* <form onSubmit={this.onSubmitGoogle}>
          <input
            className="btn btn-black"
            type="submit"
            value="Login with Google"
          ></input>
        </form> */}
        <Link href="http://localhost:5000/auth/google">
          <a className="btn btn-black">Login with Google</a>
        </Link>
        <Link href="http://localhost:5000/auth/logout">
          <a className="btn btn-black">Logout</a>
        </Link>
        <div>
          Noch nicht registriert?{" "}
          <Link href="/register">
            <a>Zur Registrierung</a>
          </Link>
        </div>

        <style jsx>{`
          form {
            margin: 20%;
            width: 50%;
          }
          fieldset {
            display: flex;
            flex-direction: column;
          }
          fieldset input {
            padding: 0.5rem 0.5rem;
          }
        `}</style>
      </main>
    );
  }
}

export default withRouter(Login);
