import React, { memo, useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';
import WYTopRanking from '@/components/top-ranking';
import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RecommendRankWrapper } from './style';
export default memo(function WYRecommendRank() {
  const { upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.recommend.upRanking,
    newRanking: state.recommend.newRanking,
    originRanking: state.recommend.originRanking
  }))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <RecommendRankWrapper>
      <WYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <WYTopRanking info ={upRanking}/>
        <WYTopRanking info ={newRanking}/>
        <WYTopRanking info ={originRanking}/>
      </div>
    </RecommendRankWrapper>
  );
});
