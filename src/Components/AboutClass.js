import { Outlet } from "react-router-dom";
import React, { Component } from "react";
import Profile from "../Components/ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <>
        {" "}
        <h1>About Us Page</h1>
        <Profile name={"Tanvi"}/>
      </>
    );
  }
}

export default About;