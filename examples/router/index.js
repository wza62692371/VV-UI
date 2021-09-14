import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
          return
        }
        route.component = r => require.ensure([], () => 
        // r(require(`../pages/md.vue`)))
          r(require(`../docs/${route.name}.md`)))
        // r(() => require(`../docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)

routes.push(
  {
    path: '/mock',
    name: 'Mock',
    meta: { title: '测试页' },
    component: () => import('../pages/mock.vue')
})




export default new Router({
  routes: routes
})
