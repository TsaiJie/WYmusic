// 第三方的
import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
// 功能性的
import routes from '@/router';
// 组件
import WYAppHeader from '@/components/app-header';
import WYAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <div>
      <Router>
        <WYAppHeader />
        {renderRoutes(routes)}
        <WYAppFooter />
      </Router>
    </div>
  );
});
