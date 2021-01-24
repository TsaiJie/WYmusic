import produce from 'immer';
import * as actionTypes from './constants';
const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      draft.topBanners = action.topBanners;
      break;
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      draft.hotRecommends = action.hotRecommends;
      break;
    case actionTypes.CHANGE_NEW_ALBUMS:
      draft.newAlbums = action.newAlbums;
      break;
    default:
      break;
  }
}, defaultState);

export default reducer;
