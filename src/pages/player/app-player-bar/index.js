import React, { memo } from 'react';
import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
export default memo(function WYAppPlayerBar() {
  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img
                src="https://p2.music.126.net/9n-c2HdvLnOgNTFTNL34Hg==/109951165623595294.jpg?param=34y34"
                alt="音乐"
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">白月光与朱砂痣</span>
              <a href="#/" className="singer-name">
                水源小樱
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="duration">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playList"></button>
          </div>
        </Operator>
      </div>
    </PlayerBarWrapper>
  );
});
