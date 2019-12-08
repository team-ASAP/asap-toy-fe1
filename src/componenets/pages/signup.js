import React, { Component } from 'react';

class signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      re_pw: "",
      emailCheck: "",
      pwCheck: ""
    };
  }
   //이메일 인풋창 핸들링
  handleEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };
   //이메일 중복검사
  checkEmail = e => {
    e.preventDefault();
    //이메일 유효성 검사 함수
    const chkEmail = function(str) {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };
    const inputEmail = {
      email: this.state.email
    };
    const email_info = {
      method: "POST",
      body: JSON.stringify(inputEmail),
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (chkEmail(this.state.email) === false) {
      alert("이메일 형식이 유효하지 않습니다.");
      this.setState({
        email: ""
      });
    } else {
      fetch("http://localhost:3000", email_info)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert("사용가능 한 아이디입니다");
            this.setState({
              emailCheck: this.state.email
            });
          } else {
            alert("이미 존재하는 아이디입니다");
          }
        });
    }
  };
  //첫번째 패스워드 입력창 set변환
  handlePW = e => {
    e.preventDefault();
    this.setState({
      pw: e.target.value
    });
  };
  //두번째 패스워드 입력창 set변환
  handleRE_PW = e => {
    e.preventDefault();
    this.setState({
      re_pw: e.target.value
    });
  };
  //첫번 째 두번 째 패스워드 일치 확인
  checkPW = e => {
    e.preventDefault();
    //비밀번호 유효성검사(영문,숫자 혼합 6~20)
    const chkPwd = function(str) {
      var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };
    if (chkPwd(this.state.re_pw) === false) {
      alert("영문,숫자를 혼합하여 6~12자 이내");
      this.setState({
        pw: "",
        re_pw: ""
      });
    } else {
      if (this.state.pw === this.state.re_pw) {
        alert("일치합니다.");
        this.setState({
          pwCheck: this.state.re_pw
        });
      } else {
        alert("불일치합니다.");
      }
    }
  };

 //서버로 가입 양식 제출
 handleSubmit = e => {
  e.preventDefault();
  const {
    email,
    emailCheck,
    nickname,
    nicknameCheck,
    pwCheck,
    pw,
    re_pw
  } = this.state;
  const signupInfo = {
    email: this.state.emailCheck,
    pw: this.state.pwCheck,
    nickname: this.state.nicknameCheck
  };
  const signup_info = {
    method: "POST",
    body: JSON.stringify(signupInfo),
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (
    email &&
    pw &&
    re_pw &&
    email === emailCheck &&
    pw === re_pw &&
    re_pw === pwCheck
  ) {
    fetch("http://localhost:3000", signup_info)
      .then(alert("가입이 완료되었습니다."))
      .then(this.props.history.push("/login"));
  } else {
    alert("입력값을 확인해주세요");
  }
};
  render(){
    return (
      <div className="App">
        <header>
          회원가입
          </header>
          <internal_sign_up>
            이메일
            이메일 확인
            비밀번호
            비밀번호 확인
            </internal_sign_up>
            <external_sign_up>
            구글 가입
            페이스북 가입
            깃허브 가입
            </external_sign_up>
      </div>
    );
  }
}

export default signup;
