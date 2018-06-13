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
				<div class="text-container">
					<h1>An Easy way for an Easy A</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
					<button class="alt">Sign Up</button> <button class="bordered">Learn More</button>
				</div>
				<div class="image-container">
					<img class="gavel" src="../assets/img/hammer.png" alt="gavel" />
					<img class="phone-2" src="../assets/img/phone_1.png" alt="IPhone X" />
					<img class="phone-1" src="../assets/img/phone_2.png" alt="IPhone X Too" />
				</div>
			</div>
		</section>
		<section class="tests">
			<div class="container">
				<div class="text-container">
					<div class="xbadge">Tests</div>
					<h1>An Easy way for an Easy A</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
				</div>
				<div class="image-container">
					<img class="curves" src="../assets/img/background_curve.svg" alt="curves" />
					<div class="particles">
						<span class="part-one"></span>
						<span class="part-two"></span>
						<span class="part-three"></span>
						<span class="part-four"></span>
					</div>
				</div>
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