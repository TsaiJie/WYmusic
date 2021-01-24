import * as actionTypes from './constants';
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
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

const changeHotRecommend = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res,
});

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommend(res.result));
    });
  };
};

const changeNewAlbum = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res,
});

export const getNewAlbumAction = (limit) => {
  // 这个返回的函数会被外面的dispatch自动调用执行
  // dispatch 传入函数就会自动执行那个函数，传入对象就会执行reducer
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbum(res.albums));
    });
  };
};
