import React, { memo } from 'react';
import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RecommendRankWrapper } from './style';
export default memo(function WYRecommendRank() {
  return (
    <RecommendRankWrapper>
      <WYThemeHeaderRCM
        title="榜单"
      />
    </RecommendRankWrapper>
  );
});
