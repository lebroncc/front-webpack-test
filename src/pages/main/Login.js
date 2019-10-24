import React, { Component } from 'react';

import './main.css';
import http from 'src/services/CommonHttp';

export default class Login extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  btnloginclick(event){
    event.preventDefault();
    console.info('登陆');
  }
  render() {
    return (
      <div className="login-bg">
        <form className="login-form">
          <div>登陆</div>
          <div>
            <div>
              <label>用户名：</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label>密码：</label>
              <input type="password" name="passwd" id="passwd" />
            </div>
            <input type="submit" id="btnlogin" onClick={(ev)=>this.btnloginclick(ev)} />
          </div>
        </form>
      </div>
    )
  }
}