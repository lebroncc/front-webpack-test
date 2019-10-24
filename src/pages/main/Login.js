import React, { Component } from 'react';

import './main.css';
import http from 'src/services/CommonHttp';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.lgformref=null;
  }
  componentDidMount(){
    
  }
  btnloginclick(event){
    event.preventDefault();
    // console.info(this.lgformref[0].value);
  }
  render() {
    return (
      <div className="login-bg">
        <form className="login-form" ref={(ref)=>this.lgformref=ref}>
          <div>登陆</div>
          <div>
            <div className="login-inputgrp">
              <label>用户名：</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="login-inputgrp">
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