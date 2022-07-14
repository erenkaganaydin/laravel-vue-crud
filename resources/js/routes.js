const Welcome = () => import('./components/Welcome.vue')
const CategoryList = () => import('./components/category/List.vue')
const CategoryEdit = () => import('./components/category/Edit.vue')
const CategoryCreate = () => import('./components/category/Add.vue')

export const routes = [
    {
        name: 'home',
        path: "/",
        component: Welcome
    },
    {
        name: 'categoryList',
        path: "/category",
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: "/category/:id/edit",
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: "/category/add",
        component: CategoryCreate
    },
]