import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: [],
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangePassword2(e) {
    this.setState({ password2: e.target.value });
  }

  onSubmitRegister(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/register", {
        displayName: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status === "ok") {
            this.props.router.push("/login");
          } else {
            this.setState({ errors: res.data.msg });
            console.log(res.data.msg);
          }
        }
      });
  }

  render() {
    return (
      <main id="register">
        <div>
          {this.state.errors.map((error) => {
            return <h1> {error.msg}</h1>;
          })}
        </div>
        <form onSubmit={this.onSubmitRegister}>
          <fieldset>
            <input
              value={this.state.name}
              type="text"
              placeholder="Name*"
              onChange={this.onChangeName}
            ></input>
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
            <input
              value={this.state.password2}
              type="text"
              placeholder="Password Bestätigen*"
              onChange={this.onChangePassword2}
            ></input>
          </fieldset>
          <input
            className="btn btn-black"
            type="submit"
            value="Registrieren"
          ></input>
        </form>
        <div>
          Bereits registriert?{" "}
          <Link href="/login">
            <a>Zum Login</a>
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

export default withRouter(Register);
