import React, { memo, useEffect } from 'react';

import { getNewAlbumAction } from '../../store';
import WYThemeHeaderRCM from '@/components/theme-header-rcm';

import { NewAlbumWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_ALBUM_LIMIT } from '@/common/contants';
export default memo(function WYNewAlbum() {
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.recommend.newAlbums,
  }));
  console.log(newAlbums)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <WYThemeHeaderRCM title="新碟上架" />
    </NewAlbumWrapper>
  );
});
