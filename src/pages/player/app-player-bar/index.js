import React, { memo, useEffect } from 'react';
import { getSizeImage, formatDate } from '@/utils/data-format';

import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSongDetailAction } from '../store/actionCreators';

export default memo(function WYAppPlayerBar() {
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(1369798757));
  }, [dispatch]);

  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const songName = currentSong.name || '未知歌曲';
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');
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
              <img src={getSizeImage(picUrl, 35)} alt="音乐" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
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
