import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'


Vue.use(Router)

const router = new Router({
  	routes: [
    	{ path: '/', name: 'Welcome', component: Welcome, meta: { reuse : false } },
    	{ path: '/pricing', name: 'Pricing', component: Pricing, meta: { reuse : false } },
    	{ path: '/features', name: 'Features', component: Features, meta: { reuse : false } }
  	],
	mode: 'history'
})

router.beforeEach((to, from, next) => {
  	if (to.matched.some(record => record.meta.reuse === false)) {
    	app.key = to.path;
  	} else {
    	app.key = null
  	}
  	next()
});

export default router;
