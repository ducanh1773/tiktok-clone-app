import FollowingPage from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
//Public routes
const publicROutes = [
    { path: '/', component: Home },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicROutes, privateRoutes };
   