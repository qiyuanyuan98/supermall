import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
    import ('@/views/home/Home.vue')
const Cart = () =>
    import ('@/views/cart/cart.vue')
const Profile = () =>
    import ('@/views/profile/profile.vue')
const Category = () =>
    import ('@/views/category/category.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')


const routes = [{
    path: '',
    redirect: '/Home',
}, {
    path: '/Home',
    component: Home
}, {
    path: '/Category',
    component: Category
}, {
    path: '/Cart',
    component: Cart
}, {
    path: '/Profile',
    component: Profile
}, {
    //动态路由
    path: '/Detail/:iid',
    component: Detail
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router