import produce from 'immer';
import * as actionTypes from './constants';
const defaultState = {
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
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
    default:
      break;
  }
}, defaultState);
export default reducer;
