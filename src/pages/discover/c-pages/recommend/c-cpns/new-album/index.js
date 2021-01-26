import React, { memo, useEffect, useRef } from 'react';
import { Carousel } from 'antd';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from '../../store';
import { NEW_ALBUM_LIMIT } from '@/common/contants';

import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import WYAlbumCover from '@/components/album-cover';
import { NewAlbumWrapper } from './style';
import { NEW_ALBUM_PER_PAGE_NUM } from '../../../../../../common/contants';

export default memo(function WYNewAlbum() {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <WYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums
                    .slice(
                      item * NEW_ALBUM_PER_PAGE_NUM,
                      (item + 1) * NEW_ALBUM_PER_PAGE_NUM
                    )
                    .map((iten) => {
                      return (
                        <WYAlbumCover
                          key={iten.id}
                          info={iten}
                          size={100}
                          width={118}
                          bgp="-570px"
                        />
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  );
});
