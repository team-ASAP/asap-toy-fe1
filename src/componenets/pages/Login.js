import React, { Component } from "react";
import axios from "axios";

const beApiAdd = "http://localhost:3000/auth/login";

class Login extends Component {
  state = {
    id: "",
    passwd: ""
  };

  componentDidMount = () => {
    axios
      .post("http://localhost:4000/auth/join", {
        id: "torom",
        passwd: "1234"
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  handleChange = e => {
    this.setState({
      id: e.target.defalutValue,
      passwd: e.target.defalutValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      id: this.state.id,
      passwd: this.state.passwd
    };

    axios.post(beApiAdd, { user }).then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <h1>로그인</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <span>아이디 </span>
            <input
              type="text"
              placeholder="id"
              defaultValue={this.state.id}
              name="id"
            />
            <br />
            <span>비밀번호 </span>
            <input
              type="pwd"
              placeholder="passwd"
              defaultValue={this.state.passwd}
              name="passwd"
            />
            <br />
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
