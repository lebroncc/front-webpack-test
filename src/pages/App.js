import React, {Component} from 'react';
import http from '../services/CommonHttp';
import Url from '../utils/Url';

import './App.css'

export default class App extends Component{
  constructor(props){
    super(props);
  }
  btnsubmitclick(){
    // http.get(Url.GET_TEST).then((ret)=>{
    //   debugger;
    // });
    http.post(Url.POST_TESTMODEL_SAVECONTACT, {
      name: '里斯',
      age: '1222',
      email: 'lisi@163.com'
    }).then((ret)=>{

    });
  }
  // bsc=()=>{
  // }
  render() {
    return (
      <div>
        {/* my react webpack starter */}
        <input type="text" style={{display: 'block'}} placeholder="请输入用户名" />
        <input type="text" style={{display: 'block', marginTop: 10}} placeholder="请输入密码" />
        <input type="button" onClick={()=>this.btnsubmitclick()} value="确定" />
      </div>
    )
  }
}

