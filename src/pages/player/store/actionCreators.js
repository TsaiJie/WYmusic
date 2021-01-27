import { getSongDetail } from '@/services/player';
import * as actionTypes from './constants';

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});
const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找playlist中是否有该首歌
    const playList = getState().player.playList;
    const songIndex = playList.findIndex((song) => song.id === ids);

    // 判断是否找到了歌曲
    if (songIndex !== -1) {
      // 查找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
    } else {
      // 没有找到歌曲
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 将最新请求到的歌曲添加到播放列表
        const newPlayList = [...playList];
        newPlayList.push(song);
        // 更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
  };
};
