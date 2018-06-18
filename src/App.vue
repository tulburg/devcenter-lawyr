<template>
  	<div id="app">
  		<Header />
    	<router-view :key="$route.path"></router-view>
  	</div>
</template>

<script>
	import Header from '@/components/sub/Header'
	export default {
	  	name: 'App',
	  	data() { return { key: null }},
	  	components: { 
	  		Header
	  	}
	}
</script>

<style type="text/css" src="./assets/fonts/circular/stylesheet.css"></style>
<style type="text/css" src="./assets/fonts/lawyr/stylesheet.css"></style>
<style type="text/css" src="./assets/css/main.css"></style>