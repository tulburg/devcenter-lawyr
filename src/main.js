// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.Array.prototype.where = function(obj) {
	for(var i=0;i<this.length;i++) {
		for(var v in obj) {
			if(this[i][v] && this[i][v] === obj[v]) return this[i];
		}
	}
	return undefined;
}
window.Element.prototype.$ = window.$ = function(id) {
	if(id[0] == ".") return (this) ? (this.getElementsByClassName(id.substring(1)).length == 1) ? this.getElementsByClassName(id.substring(1))[0] : this.getElementsByClassName(id.substring(1)) : (document.getElementsByClassName(id.substring(1)).length == 1) ? document.getElementsByClassName(id.substring(1))[0] : document.getElementsByClassName(id.substring(1));
	if(id[0] == "#") return (this) ? this.getElementById(id.substring(1)) : document.getElementById(id.substring(1));
	if(id[0] == ">") return (this) ? (this.getElementsByTagName(id.substring(1)).length == 1) ? this.getElementsByTagName(id.substring(1))[0] : this.getElementsByTagName(id.substring(1)) : (document.getElementsByTagName(id.substring(1)).length == 1) ? document.getElementsByTagName(id.substring(1))[0] : document.getElementsByTagName(id.substring(1));
	return undefined;
}
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
