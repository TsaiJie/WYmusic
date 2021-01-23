import React, { memo } from 'react';
import WYTopBanner from './c-cpns/top-banner';
import WYHotRecommend from './c-cpns/hot-recommend';
import WYNewAlbum from './c-cpns/new-album';
import WYRecommendRank from './c-cpns/recommend-rank';
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
          <WYHotRecommend />
          <WYNewAlbum />
          <WYRecommendRank />
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
