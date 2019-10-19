import React, {Component} from 'react';
import './App.css'

export default class App extends Component{
  render() {
    return (
      <div>
        {/* my react webpack starter */}
        <input type="text" style={{display: 'block'}} placeholder="请输入用户名" />
        <input type="text" style={{display: 'block', marginTop: 10}} placeholder="请输入密码" />
        <input type="button" value="确定" />
      </div>
    )
  }
}

