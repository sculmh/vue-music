import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',      
      redirect: '/recommend'		//重定向
    },
    {
      path: '/recommend',      
      component: Recommend
    },
    {
      path: '/search',      
      component: Search
    },
    {
      path: '/Rank',      
      component: Rank
    },
    {
      path: '/singer',      
      component: Singer
    }
  ]
})
