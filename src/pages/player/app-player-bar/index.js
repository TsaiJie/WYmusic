import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/data-format';

import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSongDetailAction } from '../store/actionCreators';

export default memo(function WYAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  // 滑块滑动的时候isChanging 为true，当滑块滑动暂停的时候isChanging是false
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const audioRef = useRef();
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const songName = currentSong.name || '未知歌曲';
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');
  const showCurrentTime = formatDate(currentTime, 'mm:ss');

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);
  // other hooks
  useEffect(() => {
    //1811147916,1369798757
    dispatch(getSongDetailAction(1811147916));
  }, [dispatch]);
  // handle fun
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  const timeUpdate = useCallback(
    (e) => {
      if (!isChanging) {
        setCurrentTime(e.target.currentTime * 1000);
        // console.log('timeUpdate: currentTime: ', e.target.currentTime);
        setProgress((currentTime / duration) * 100);
      }
    },
    [isChanging, currentTime, duration]
  );
  //  监听滑块的滑动
  const sliderChange = useCallback(
    (value) => {
      const currentTime = (value / 100) * duration;

      setIsChanging(true);
      setProgress(value);
      setCurrentTime(currentTime);
    },
    [duration]
  );
  // 监听滑块儿滑动暂停
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setIsChanging(false);
      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );
  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
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
              <Slider
                tipFormatter={(e) => showCurrentTime}
                defaultValue={0}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayerBarWrapper>
  );
});
