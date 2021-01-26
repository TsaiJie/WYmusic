import * as actionTypes from './constants';
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res,
});

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res.result));
    });
  };
};

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res,
});

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res,
});
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res,
});
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res,
});

export const getNewAlbumAction = (limit) => {
  // 这个返回的函数会被外面的dispatch自动调用执行
  // dispatch 传入函数就会自动执行那个函数，传入对象就会执行reducer
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res.albums));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      console.log(res.playlist);
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res.playlist));
          break;
        case 2:
          dispatch(changeNewRankingAction(res.playlist));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res.playlist));
          break;
        default:
          break;
      }
    });
  };
};
