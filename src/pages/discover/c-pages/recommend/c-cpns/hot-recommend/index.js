import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMENDS_LIMIT } from '@/common/contants';

import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import { HotRecommendWrapper } from './style';
import WYSongsCover from '@/components/songs-cover';
export default memo(function WYHotRecommend() {
  // state
  //redux hooks
  const { hotRecommeds } = useSelector(
    (state) => ({
      hotRecommeds: state.recommend.hotRecommends,
    }),
    shallowEqual
  );
  console.log(hotRecommeds);
  const dispatch = useDispatch();

  // 其他hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMENDS_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <WYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommeds.map((item, index) => {
          return <WYSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
