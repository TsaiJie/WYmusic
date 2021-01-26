import React, { memo, useEffect } from 'react';

import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RecommendRankWrapper } from './style';
import { useDispatch } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';
export default memo(function WYRecommendRank() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <RecommendRankWrapper>
      <WYThemeHeaderRCM title="榜单" />
    </RecommendRankWrapper>
  );
});
