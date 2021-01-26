import React, { memo, useEffect } from 'react';
import { Carousel } from 'antd';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from '../../store';
import { NEW_ALBUM_LIMIT } from '@/common/contants';

import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import { NewAlbumWrapper } from './style';

export default memo(function WYNewAlbum() {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums,
    }),
    shallowEqual
  );
  console.log(newAlbums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <WYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"></button>
        <div className="album">
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"></button>
      </div>
    </NewAlbumWrapper>
  );
});
