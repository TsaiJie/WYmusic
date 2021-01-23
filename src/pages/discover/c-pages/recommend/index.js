import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

function WYRecommend(props) {
  //  redux hook的使用
  // 组件和redux关联：获取数据和进行操作
  // 默认是===比较
  // 需要使用浅层比较，可以提升性能， 避免无谓的重新渲染
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <div>
      <h2>WYRecommend {topBanners.length} </h2>
    </div>
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
