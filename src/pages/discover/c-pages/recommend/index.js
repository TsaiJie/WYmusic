import React, { memo } from 'react';
import WYTopBanner from './c-cpns/top-banner';
import WYHotRecommend from './c-cpns/hot-recommend';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

function WYRecommend(props) {
  return (
    <RecommendWrapper>
      <WYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <WYHotRecommend></WYHotRecommend>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(WYRecommend);

// function WYRecommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return (
//     <div>
//       <h2>WYRecommend {topBanners.length}</h2>
//     </div>
//   );
// }
// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(memo(WYRecommend));
