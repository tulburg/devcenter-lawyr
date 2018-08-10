<template>
	<div class="p-main">
		<section class="pricing">
			<div class="container">
				<div class="text-container">
					<h1>Get Access to Lawyr for just N3000</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
					<button class="alt shadow">View Features</button>
				</div>
				<div class="image-container">
					<img class="fan" src="../assets/img/fan.svg" alt="fan" />
					<img class="phone-cover" src="../assets/img/phone_cover.png" alt="phone cover" />
				</div>
			</div>
		</section>
		<div class="bars">
			<div class="param">
				<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
			</div>
			<div class="container">
				<div class="bars-wrapper">
					<div class="left-pane">
						<div class="box">
							<div class="label">FREE ACCESS</div>
							<div class="price">‎<span>₦</span>0</div>
							<ul>
								<li>1 free year of MCQ exams</li>
								<li>View corrections and explanations</li>
								<li>Take test as a single user or as a group</li>
								<li>Take up to 3 Tests</li>
							</ul>
						</div>
					</div>
					<div class="mid-pane"><span>OR</span></div>
					<div class="right-pane">
						<div class="box">
							<div class="label">PREMIUM ACCESS</div>
							<div class="price">‎<span>₦</span>3000</div>
							<ul>
								<li>Gain access to 8 years of past questions and the option of access to resit questions.</li>
								<li>View corrections and explanations</li>
								<li>Take test as a single user or as a group</li>
								<li>Customise your revision by creating flashcards</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer class="alt">
			<div class="container">
				<div class="footer-particle">
					<div class="particles"><span class="part-one"></span><span class="part-two"></span><span class="part-three"></span><span class="part-four"></span></div>
				</div>

				<h1>Get Started for Free</h1>
				<p>Download Lawyr</p>
				<div class="download">
					<a href="#"><img src="../assets/img/app_store.png" alt="App Store" /></a>
					<a href="#"><img src="../assets/img/googleplay.png" alt="App Store" /></a>
				</div>
				<h1>Subscribe to stay up to date with Lawyr</h1>
				<div class="input-wrapper">
					<input type="text" placeholder="Enter Email Address" v-model="email" />
					<button class="alt" v-on:click="subscribe" v-if="!loading">Subscribe</button>
					<button class="alt" v-else><i class="ic-spinner animate-spin"></i></button>
				</div>
				<div><span>&copy; Lawyr 2018</span></div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Pricing',
		data() { return { email: '', loading: false } },
		methods: {
			subscribe() {
				this.loading = true;
				this.$http.post("https://lawyr.herokuapp.com/api/v1/users/subscribe", {
					email: this.email
				}).then(res => {
					this.loading = false;
					this.email = '';
				}).catch(err => { console.log(err); this.loading = false; } );
			}
		}
	}
</script>