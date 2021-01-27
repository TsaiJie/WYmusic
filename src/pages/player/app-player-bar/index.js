import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  changeCurrentSongAndIndexAction,
  changeSequenceAction,
  getSongDetailAction,
} from '../store/actionCreators';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/data-format';

import { Slider } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';

export default memo(function WYAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  // 滑块滑动的时候isChanging 为true，当滑块滑动暂停的时候isChanging是false
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentSong, sequence, lyricList } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      sequence: state.player.sequence,
      lyricList: state.player.lyricList,
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
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);
  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(1811147916));
  }, [dispatch]);
  // handle fun
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeMusic = (tag) => {
    dispatch(changeCurrentSongAndIndexAction(tag));
  };
  const handleMusicEnded = () => {
    if (sequence === 2) {
      //单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSongAndIndexAction(1));
    }
  };
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
      // 获取当前歌词
      let currentLyricIndex = 0;
      for (let i = 0; i < lyricList.length; i++) {
        const lyricItem = lyricList[i];
        if (e.target.currentTime * 1000 < lyricItem.time) {
          currentLyricIndex = i;
          break;
        }
      }
      console.log(lyricList[currentLyricIndex - 1]);
    },
    [isChanging, currentTime, duration, lyricList]
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
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="音乐" />
            </NavLink>
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
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playList"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnded(e)}
      />
    </PlayerBarWrapper>
  );
});
