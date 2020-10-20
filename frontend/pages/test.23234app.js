import React, { useState, useEffect } from "react";
import axios from "axios";

import App from "next/app";
class MyApp extends App {
  render() {
    const [userData, setUserData] = useState({
      token: undefined,
      user: undefined,
    });

    useEffect(() => {
      const checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token");
        if (token === null) {
          localStorage.setItem("auth-token", "");
          token = "";
        }
        console.log(token);

        // const tokenRes = await axios.post(
        //   "http://localhost:5000/auth/tokenValidity",
        //   null,
        //   { headers: { Authorization: "Bearer " + token } }
        // );
        // if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/auth/", {
          headers: { Authorization: "Bearer " + token },
        });
        console.log(token);
        setUserData({
          token,
          user: userRes.data,
        });
        // }
      };

      checkLoggedIn();
    }, []);

    const { Component, pageProps } = this.props;
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
export default MyApp;
