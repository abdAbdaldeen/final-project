import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _302a8d7b = () => interopDefault(import('../pages/ارشادات-الاستخدام.vue' /* webpackChunkName: "pages/ارشادات-الاستخدام" */))
const _95d87220 = () => interopDefault(import('../pages/عن-مبرمجون.vue' /* webpackChunkName: "pages/عن-مبرمجون" */))
const _5d82ada1 = () => interopDefault(import('../pages/AskQuestionPage.vue' /* webpackChunkName: "pages/AskQuestionPage" */))
const _f65db88e = () => interopDefault(import('../pages/LandingPage.vue' /* webpackChunkName: "pages/LandingPage" */))
const _3954d4e5 = () => interopDefault(import('../pages/g/_id.vue' /* webpackChunkName: "pages/g/_id" */))
const _1eaaffea = () => interopDefault(import('../pages/l/_id.vue' /* webpackChunkName: "pages/l/_id" */))
const _04012aef = () => interopDefault(import('../pages/q/_id.vue' /* webpackChunkName: "pages/q/_id" */))
const _15e54cb6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/%D8%A7%D8%B1%D8%B4%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85",
    component: _302a8d7b,
    name: "ارشادات-الاستخدام"
  }, {
    path: "/%D8%B9%D9%86-%D9%85%D8%A8%D8%B1%D9%85%D8%AC%D9%88%D9%86",
    component: _95d87220,
    name: "عن-مبرمجون"
  }, {
    path: "/AskQuestionPage",
    component: _5d82ada1,
    name: "AskQuestionPage"
  }, {
    path: "/LandingPage",
    component: _f65db88e,
    name: "LandingPage"
  }, {
    path: "/g/:id?",
    component: _3954d4e5,
    name: "g-id"
  }, {
    path: "/l/:id?",
    component: _1eaaffea,
    name: "l-id"
  }, {
    path: "/q/:id?",
    component: _04012aef,
    name: "q-id"
  }, {
    path: "/",
    component: _15e54cb6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
