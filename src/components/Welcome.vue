<template>
	<div>
		<header>
			<div class="logo">
				<img src="../assets/img/logo_sm.png" alt="logo" />
				<h1>Lawyr</h1>
			</div>
			<div class="links">
				<ul>
					<li v-for="link in links"><a :href="link.href" :class="{ button: link.action }" v-on:click.prevent="(e) => setActiveLink(e)">{{ link.title }}</a></li>
				</ul>
			</div>
		</header>
		<section class="home" id="home">
			<div class="container main-container">
				<div class="bg-box"></div>
			</div>
		</section>
	</div>
</template>


<script>
	export default {
		name: 'Welcome',
		data() { return {
			links: [ 
				{ href:"", title: "Home" }, 
				{ href: "", title: "Features" },
				{ href: "", title: "Pricing" },
				{ href: "", title: "Contact" },
				{ href: "", title: "Sign Up Free", action: true }
			]
		} },
		methods: {
			setActiveLink(e) {
				let all = $(".links").$(">li");
				for(var i = 0; i<all.length; i++){
					if(all[i].$(">a") == e.target) {
						if(all[i].$(">a").className != 'button') {
							all[i].$(">a").className = all[i].$(">a").className +" active";
						}
					} else { if(all[i].$(">a").className != 'button') { all[i].$(">a").className = "" } }
				}
			}
		},
		mounted() {
			$(">header").style.left = $(".main-container").offsetLeft+'px';
			$(">header").style.width = $(".main-container").offsetWidth+'px';
			window.onresize = function() {
				$(">header").style.left = $(".main-container").offsetLeft+'px';
				$(">header").style.width = $(".main-container").offsetWidth+'px';
			}
		}
	}
</script>