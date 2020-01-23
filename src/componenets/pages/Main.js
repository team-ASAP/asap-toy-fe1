import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        메인입니다.
        <br />
        <Link to="/login">로그인</Link>
      </div>
    );
  }
}

export default Main;
