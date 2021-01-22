import WYDiscover from '@/pages/discover';
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
