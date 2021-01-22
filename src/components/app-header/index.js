/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data';

import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';

export default memo(function WYAppHeader() {
  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title} <i className="sprite_01 icon"></i>{' '}
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className={'select-item'}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            prefix={<SearchOutlined />}
            className="search"
            placeholder="音乐/视频/电台/用户"
          />
          <div className="center">创作者中心</div>
          <div style={{cursor: 'pointer'}}>登陆</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
