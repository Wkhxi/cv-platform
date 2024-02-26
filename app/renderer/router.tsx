/**
 * @desc 管理所有模块入口
 */

import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Root from './container/root';
// import Resume from './container/resume';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@src/common/constants/router';

function Router() {
  return (
    <HashRouter>
      {/* 选择匹配到的第一个组件渲染 */}
      <Switch>
        {/* 要添加exact属性 严格匹配 */}
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        {/* 简历模块 */}
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}

export default Router;
