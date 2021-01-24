import { combineReducers } from 'redux';

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';

// function reducer(state = {}, action) {
//  return {
//    counterInfo: counterReducer(state.counterInfo, action),
//    homeInfo: homeReducer(state.homeInfo, action)
//  }
// }

// 将多个reducer进行合并，返回一个新的对象，每次拷贝可能不是很合适 使用redux-immutable中的combineReducers可以返回一个Immutable对象
// const cReducer = combineReducers({
//   recommend: recommendReducer,
// });

const cReducer = combineReducers({
  recommend: recommendReducer,
});

export default cReducer;
