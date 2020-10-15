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
    axios.post("http://localhost:5000/api/contacts/send", {
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
        <main id="contact">
          <article>
            <h1>
              Hi, wie können wir dir <span class="stroke">helfen?</span>{" "}
            </h1>
            <p>
              An diesen Zeiten erreichst du uns am besten an folgenden tagen und
              Zeiten:
            </p>
            <div>
              <p>Montag - Freitag</p>
              <p>09:00 - 17:00 Uhr</p>
            </div>
            <p>
              Unser Campus befindet sich im Super7000 Coworking Space – der
              Mutter aller Coworking Spaces. Die genau Adresse lautet:
            </p>
            <div>
              <p>Ratherstr. 25 </p>
              <p>40476 Düsseldorf</p>
            </div>
          </article>

          <form onSubmit={this.onSubmitForm}>
            <fieldset>
              <input
                value={this.state.firstName}
                type="text"
                placeholder="Vorname*"
                onChange={this.onChangeFirstName}
              ></input>
              <input
                value={this.state.lastName}
                type="text"
                placeholder="Nachname*"
                onChange={this.onChangeLastName}
              ></input>
              <input
                value={this.state.email}
                type="text"
                placeholder="Email*"
                onChange={this.onChangeEmail}
              ></input>
              <input
                value={this.state.phoneNumber}
                type="text"
                placeholder="Telefonnummer*"
                onChange={this.onChangePhoneNumber}
              ></input>
              <textarea
                value={this.state.message}
                cols="30"
                rows="10"
                placeholder="Nachricht*"
                onChange={this.onChangeMessage}
              ></textarea>
            </fieldset>
            <input
              className="btn contact-btn"
              type="submit"
              value="Einsenden"
            ></input>
          </form>
        </main>

        <style jsx>{`
         main {
          height: 100vh;
          background: black;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3em;
          padding: 12% 8%;
        }
        main article {
          color: #3dd7ac;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        form fieldset {
          border: none;
        }
        form input,
        form textarea {
          display: block;
          width: 100%;
          border: 2px solid white;
          outline: none;
          padding: 0.8em;
          margin: 1em 0;
          font-size: 0.9em;
          font-weight: 200;
          color: white;
          min-width: 25em;
          background: none;  
          font-size: 1em;
          font-family: "neue-machina-light", sans-serif;
          font-weight: 100;
          letter-spacing: 1px;
        }
       main article h1 {
          font-size: 5em;
          font-family: "neue-machina-light", sans-serif;
          font-weight: 100;
        }
        .stroke {
          -webkit-text-stroke: 2px #3dd7ac;
          -webkit-text-fill-color: black;
        }
        main article p {
          font-size: 1.2em;
          line-height: 1.5;
          width: 80%;
          font-family: "neue-machina-light", sans-serif;
          font-weight: 100;
        }
        ::placeholder {
          color: white;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8em;
          font-family: "neue-machina-regular", sans-serif;
        }      

        @media (min-width: 768px) and (max-width: 1024px) {
          main {
            height: auto;
            grid-template-columns: 1fr;
            gap: 1em;
            padding: 7% 10%;
          }
          main article h1 {
            width: 80%;
            font-size: 4em;
            padding-bottom: 0.8em;
          }
          main article div {
            padding-bottom: 1.5em;
          }
          form input,
          form textarea {
            min-width: auto;
          }
        }
 
        @media (min-width: 320px) and (max-width: 767px) {
          main {
            height: auto;
            grid-template-columns: 1fr;
            gap: 1em;
            padding: 7% 10%;
          }
          main article h1 {
            width: 100%;
            font-size: 3em;
            padding-bottom: 0.8em;
          }
          main article {
            width: 100%;
          }
          main article div {
            padding-bottom: 1.5em;
          }
          main article p {
            font-size: 1em;
            width: 100%;
          }
          form input,
          form textarea {
            min-width: auto;
          }
        }
        `}</style>
      </div>
    );
  }
}

export default Contact;
