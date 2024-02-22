import Home from "../../layout/pages/home/Home.jsx";
import Login from "../../layout/pages/auth/Login.jsx";
import UserProfile from "../../layout/pages/user/UserProfile.jsx";
import UserLayout from "../../layout/UserLayout.jsx";
import Register from "../../layout/pages/auth/Register.jsx";
import GuestLayout from "../../layout/GuestLayout.jsx";
import Page404 from "../../component/Page404.jsx";
import StackedLists from "../../component/StackedLists.jsx";
import ProductList from "../../layout/pages/product/ProductList.jsx";
import StoreLayout from "../../layout/StoreLayout.jsx";
import Pagination from "../../component/Pagination.jsx";
import ShoppingCartSlide from "../../layout/pages/cart/ShoppingCartSlide.jsx";

export const ROUT_DATA = [
    { path: "/", element: Home, layout: UserLayout },
    { path: "/stacked", element: StackedLists, layout: UserLayout },
    { path: "/profile", element: UserProfile, layout: UserLayout },
    { path: "/login", element: Login, layout: GuestLayout },
    { path: "/register", element: Register, layout: GuestLayout },
    { path: "/404", element: Page404, layout: GuestLayout },
    { path: "/shop", element: ProductList, layout: StoreLayout },
    { path: "/page", element: Pagination, layout: StoreLayout },
    { path: "/cart", element: ShoppingCartSlide, layout: StoreLayout },
];
