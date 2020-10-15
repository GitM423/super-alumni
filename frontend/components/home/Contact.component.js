import React from "react";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/api/contact")
  //     .then((response) => {
  //       console.log("Data: ", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   axios
  //     .post("")
  //     .then((response) => {
  //       // console.log("Data: ", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }
  onChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmitForm(e) {
    e.preventDefault();

    console.log(this.state.firstName);
    axios.post("http://localhost:5000/api/contact/send", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      message: this.state.message,
    });
    // window.location.reload(false);
  }

  render() {
    return (
      <div>
        <article>
          <h1>Hi, wie können wir dir helfen?</h1>
          <p>
            An diesen Zeiten erreichst du uns am besten an folgenden tagen und
            Zeiten:
          </p>
          <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
          <p>
            Unser Campus befindet sich im Super7000 Coworking Space – der Mutter
            aller Coworking Spaces. Die genau Adresse lautet:
          </p>
          <p>Ratherstr. 25 40476 Düsseldorf</p>
        </article>

        <form onSubmit={this.onSubmitForm}>
          <fieldset>
            <input
              value={this.state.firstName}
              type="text"
              // name="firstName"
              // id=""
              // placeholder="Vorname"
              onChange={this.onChangeFirstName}
            ></input>
            <input
              value={this.state.lastName}
              type="text"
              // name="lastName"
              // id=""
              // placeholder="Name"
              onChange={this.onChangeLastName}
            ></input>
            <input
              value={this.state.email}
              type="text"
              // name="email"
              // id=""
              // placeholder="Email"
              onChange={this.onChangeEmail}
            ></input>
            <input
              value={this.state.phoneNumber}
              type="text"
              // name="phoneNumber"
              // id=""
              // placeholder="Telefonnummer"
              onChange={this.onChangePhoneNumber}
            ></input>
            <textarea
              value={this.state.message}
              cols="30"
              rows="10"
              // name="message"
              // id=""
              // placeholder="Nachricht"
              onChange={this.onChangeMessage}
            ></textarea>
          </fieldset>
          <input
            className="contact-btn"
            type="submit"
            value="Einsenden"
          ></input>
        </form>

        <style jsx>{`
          h1 {
            color: pink;
          }
        `}</style>
      </div>
    );
  }
}

export default Contact;
