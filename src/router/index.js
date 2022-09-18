import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import GameView from '../views/GameView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import ReviewView from '../views/ReviewView.vue'
import NewsView from '../views/NewsView.vue'
import NewsPageView from '../views/NewsPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'games',
    component: GamesView
  },
  {
    path: '/games/:slug',
    name: 'game',
    component: GameView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },
  {
    path: '/reviews/:slug',
    name: 'review',
    component: ReviewView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/news/:slug',
    name: 'news-article',
    component: NewsPageView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // Scroll to top when go to new page
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
