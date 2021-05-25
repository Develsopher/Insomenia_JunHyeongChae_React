import NotFoundPage from '@pages/404';
import CategoryPage from '@pages/menutab/categorypage';
import IntroPage from '@pages/intro';
import Home from '@pages/menutab/home/home';
import ItemIndexPage from '@pages/items/categoriedItem';
import MyPage from '@pages/menutab/mypage';
import SignUpPage from '@pages/users/registrations/new';
import LoginPage from '@pages/users/sessions/new';
import ItemDetail from '@pages/items/itemdetail';

const routes = [
  { path: '/categorypage', component: CategoryPage },
  { path: '/users/sign_in', component: LoginPage },
  { path: '/', component: Home },
  { path: '/intro', component: IntroPage },
  { path: '/mypage', component: MyPage },
  { path: '/items/category/:id', component: ItemIndexPage },
  { path: '/items/:id', component: ItemDetail },
  { path: '(.*)', component: NotFoundPage },
];

export default routes;
