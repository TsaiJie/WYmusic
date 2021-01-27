import produce from 'immer';
import * as actionTypes from './constants';
const defaultSatte = {
  currentSong: {},
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      draft.currentSong = action.currentSong;
      break;
    default:
      break;
  }
}, defaultSatte);
export default reducer;
