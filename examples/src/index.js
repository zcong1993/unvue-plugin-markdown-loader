import Vue from 'vue'
import Router from 'vue-router'

// import your markdown file as vue component
// import Index from './posts/index.md'
// also support lazy loading
const Index = resolve => import('./posts/index.md').then(resolve)

// you can add some style here
// import some css file
import './style/github-gist.css'
import './style/main.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index
  }]
})

export default { router }
