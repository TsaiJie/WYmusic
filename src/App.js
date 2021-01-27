// 第三方的
import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';
// 功能性的
import routes from '@/router';
import store from '@/store';
// 组件
import WYAppHeader from '@/components/app-header';
import WYAppFooter from '@/components/app-footer';
import WYAppPlayerBar from '@/pages/player/app-player-bar';

export default memo(function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <WYAppHeader />
          {renderRoutes(routes)}
          <WYAppFooter />
          <WYAppPlayerBar />
        </Router>
      </Provider>
    </div>
  );
});
