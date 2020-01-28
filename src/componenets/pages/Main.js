import React, { Component } from "react";
import { Link } from "react-router-dom";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Main extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);

    const { cookies } = props;
    this.state = {
      token: cookies.get('user') || null
    };
  }

  handleLogout = () => {
    const { cookies } = this.props;

    cookies.remove('user');
    this.setState({
      token: null
    })
  }

  render = () => {
    const isLoggedIn = this.state.token ? true : false;
    let btn;

    if(isLoggedIn){
      btn = <button type="button" onClick={this.handleLogout}>로그아웃</button>
    }else{
      btn = <Link to="/login">로그인</Link>
    }

    return (
      <div>
        메인입니다.
        <br />
        {btn}
      </div>
    );
  }
}

export default withCookies(Main);
