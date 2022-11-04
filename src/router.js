import Vue from 'vue'
import Router from 'vue-router'
import UserHome from './pages/home'
import UserIndex from './pages/index'
import UserProduct from './pages/product'
import UserDetail from './pages/detail'
import UserCart from './pages/cart'
import UserOrder from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'


Vue.use(Router);

export default new Router({
    //配置子路由
    routes:[
        { //hone根组件
          path:'/',  //路径
          name:'home', //避免重复引用？？？
          component:UserHome,
          children:[  //子路由
            {
                path:'/index', 
                name:'index',
                component:UserIndex, 
            },
            {   //产品栈
                path:'/product/:id',   //动态定义路由的方式
                name:'product',
                component:UserProduct, 
            },
            {
                path:'/detail/:id', 
                name:'detail',
                component:UserDetail, 
            },
          ],
        },
        {
            path:'/cart',
            name:'crt', 
            component:UserCart,
        },
        {
            path:'/order',
            name:'order', 
            component:UserOrder,
            children:[
                {
                    path:'/list',
                    name:'orderList', 
                    component:OrderList,  
                },
                {
                    path:'/confirm',
                    name:'orderConfirm', 
                    component:OrderConfirm,  
                },
                {
                    path:'/pay',
                    name:'orderPay', 
                    component:OrderPay,  
                },
            ]
        },
    ]
})