import React, { Component } from "react";
import axios from "axios";

// Back api 주소 (포트 400으로 바뀜)
const beApiAdd = "http://localhost:4000/auth/login";

class Login extends Component {
  state = {
    id: "",
    passwd: ""
  };

  /* auth/join 사용해서 임시 회원가입 */
  // componentDidMount = () => {
  //   axios
  //     .post("http://localhost:4000/auth/join", {
  //       id: "torom",
  //       passwd: "1234"
  //     })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // 새로고침 방지
    e.preventDefault();

    axios
      .post(beApiAdd, {
        id: this.state.id,
        passwd: this.state.passwd
      }, {withCredentials: true})
      .then(res => {
        console.log(res);
        console.log(res.data);
        //홈으로 리다이렉트
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div>
        <h1>로그인</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <span>아이디 : </span>
            <input
              type="text"
              placeholder="아이디"
              onChange={this.handleChange}
              value={this.state.id}
              name="id"
            />
            <br />
            <span>비밀번호 : </span>
            <input
              type="password"
              placeholder="비밀번호"
              value={this.state.passwd}
              onChange={this.handleChange}
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
