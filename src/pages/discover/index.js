import React, { memo, useEffect } from 'react';
import { discoverMenu } from '@/common/local-data';
import { DiscoverWrapper, TopMenu } from './style';
import requset from '@/services/request';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
export default memo(function WYDiscover(props) {
  useEffect(() => {
    requset.get('/banner').then((res) => {
      console.log(res);
    });
  }, []);
  const { routes } = props.route;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div key={item.title}>
                <NavLink className="item" to={item.link}>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  );
});
