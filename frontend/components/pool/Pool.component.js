import React from "react";
import axios from "axios";

import FilterTag from "../components/essentials/FilterTag.component";

import AlumniList from "../components/pool/AlumniList.component";
import OrderList from "../components/pool/OrderList.component";

class Pool extends React.Component {
  constructor(props) {
    super(props);
    // this.onSubmitForm = this.onSubmitForm.bind(this);
    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    // this.onChangeMessage = this.onChangeMessage.bind(this);

    this.state = {
      poolSelection: "alumni",
      filterTags: ["tag", "tag", "forrest"],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/filters")
      .then((response) => {
        console.log("Data: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.filterTags);
    return (
      <main id="pool">
        <section>
          <h1>Super Alumni Pool</h1>
          <div>
            {this.state.filterTags.map((tag) => {
              return <FilterTag tag={tag} />;
            })}
            <div>Alle Filter</div>
          </div>
          <div className="add-filter"></div>
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his nice trailer. Did you enjoy your meal, Mom? You
            drank it fast enough. Get me a vodka rocks. And a piece of toast.
            Marry me.”
          </p>
        </section>

        {this.state.poolSelection === "alumni" ? (
          //   <AlumniList />
          <div></div>
        ) : this.state.poolSelection === "orders" ? (
          //   <OrderList />
          <div></div>
        ) : (
          <section>Error</section>
        )}

        <style jsx>{``}</style>
      </main>
    );
  }
}

export default Pool;
