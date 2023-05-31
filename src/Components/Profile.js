import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      Bio: "I'm a student",
      Profession: "Web developer",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.imgUrl} alt="myPhoto" style={{ width: "280px" }} />
        <h3>{this.state.Bio} </h3>
        <h4>{this.state.Profession} </h4>
      </div>
    );
  }
}

export default Profile;
