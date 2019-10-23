import * as axios from 'axios';

// 全局的 axios 默认值
// instance.defaults.baseURL = 'xxx'
// instance.defaults.withCredentials = true
// instance.defaults.timeout = 10000
// instance.defaults.headers.post['Content-Type']='application/json;charset=UTF-8;

const instance = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' }
});


// 请求发送封装
instance.interceptors.request.use(function (config) {
  let token = 'thisisatesttoken';
  // debugger;
  // let t=sessionStorage.getItem('token');
  Object.assign(config.headers, { 'token': token });
  return config;
}, function (err) {
  // 对请求错误做些什么
  // return Promise.reject(error);
  throw new Error(err);
})

// 请求返回拦截
instance.interceptors.response.use((resp)=>{
  if(resp.status===200||resp.status==='200'){
    // 继续
    return resp.data;
  }else{
    // 请求状态返回400，返回404 not found
    // window.localtion.href=''
    throw new Error(response.data.msg || '服务异常')
  }
}, (err)=>{
  // alert('请求出现错误');
  throw new Error('请求出现错误：'+err.message);
})


const request = function(url, param, config, method){
  // if(Object.prototype.toString.call(url)!='[object String]'){ }
  if(typeof url != 'string') throw new Error('请求地址错误');
  if(method!='post'&&method!='get'){
    throw new Error('请求类型错误');
  }
  return new Promise((resolve, reject)=>{
    // axios.post()/axios.get()
    instance[method](url, param, {...config}).then((resp)=>{
      resolve(resp);
    }, (err)=>{
      reject(err);
    }).catch((err)=>{
      reject(err);
    });
  })
}


let http={
  post: null,
  get: null
}
http.post=(url, param=null, config={})=>{
  return request(url, param, config, 'post');
}
http.get=(url, param=null, config={})=>{
  // axios.get(url, param).then((ret)=>{
  //   console.log(ret);
  // });
  return request(url, param, config, 'get');
}

export default http;


