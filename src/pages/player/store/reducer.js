import produce from 'immer';
import { defaultSongs } from '@/common/local-data';
import * as actionTypes from './constants';
const defaultState = {
  currentSong: {},
  playList: [...defaultSongs],
  currentSongIndex: 0,
  sequence: 0, // 0顺序 1随机 2 单曲
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      draft.currentSong = action.currentSong;
      break;
    case actionTypes.CHANGE_PLAY_LIST:
      draft.playList = action.playList;
      break;
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      draft.currentSongIndex = action.currentSongIndex;
      break;
    case actionTypes.CHANGE_SEQUENCE:
      draft.sequence = action.sequence;
      break;
    default:
      break;
  }
}, defaultState);
export default reducer;
