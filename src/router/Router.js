import React from 'react';
import {HashRouter as BaseRouter, Switch, Route, Redirect} from 'react-router-dom';


import NotFound from '../pages/404/Notfound';
// import App from '../pages/main/App';
import LoginPage from '../pages/main/Login'; 

const Router=()=>{
  return (
    <BaseRouter>
      <Switch>
        <Route exact path='/' render={()=><Redirect to="/login" />} />
        <Route exact path='/login' component={LoginPage} />

        {/* 配置404page */}
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </BaseRouter>
  )
}

export default Router;