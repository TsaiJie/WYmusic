import WYDiscover from '@/pages/discover';
import WYAlbum from '@/pages/discover/c-pages/album';
import WYArtist from '@/pages/discover/c-pages/artist';
import WYDjradio from '@/pages/discover/c-pages/djradio';
import WYRanking from '@/pages/discover/c-pages/ranking';
import WYRecommend from '@/pages/discover/c-pages/recommend';
import WYSongs from '@/pages/discover/c-pages/songs';

import WYMine from '@/pages/mine';
import WYFriend from '@/pages/friend';

import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: WYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to={'/discover/recommend'} />,
      },
      {
        path: '/discover/album',
        component: WYAlbum,
      },
      {
        path: '/discover/artist',
        component: WYArtist,
      },
      {
        path: '/discover/djradio',
        component: WYDjradio,
      },
      {
        path: '/discover/ranking',
        component: WYRanking,
      },
      {
        path: '/discover/recommend',
        component: WYRecommend,
      },
      {
        path: '/discover/songs',
        component: WYSongs,
      },
    ],
  },
  {
    path: '/mine',
    component: WYMine,
  },
  {
    path: '/friend',
    component: WYFriend,
  },
];

export default routes;
