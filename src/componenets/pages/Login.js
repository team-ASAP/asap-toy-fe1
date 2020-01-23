import React, { Component } from "react";
import axios from "axios";

const beApiAdd = "http://localhost:3000/auth/login";

class Login extends Component {
  state = {
    id: "",
    pw: "",
    beApi: []
  };

  async componentDidMount() {
    let { data: beApi } = await axios.post(beApiAdd);
    this.setState({ beApi });
    console.log(beApi);
  }

  handleChange = e => {};

  handleSubmit = e => {};

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
              type="pw"
              placeholder="pw"
              defaultValue={this.state.pw}
              name="pw"
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
