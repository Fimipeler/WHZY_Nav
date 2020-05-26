import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: () =>
      import(/* webpackChunkName: "index" */ '@/components/HelloWorld.vue')
},
{
  path: '/index',
  name: 'index',
  component: () =>
      import(/* webpackChunkName: "index" */ '@/views/index.vue')
},
{
  path: '/detail/:name',
  name: 'detail',
  component: () =>
      import(/* webpackChunkName: "detail" */ '@/views/detail.vue')
},
{
  path: '/floorpage',
  name: 'floorpage',
  component: () =>
      import(/* webpackChunkName: "floorpage" */ '@/views/floorpage.vue')
},
{
  path: '/test',
  name: 'test',
  component: () =>
      import(/* webpackChunkName: "floorpage" */ '@/views/test.vue')
}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
