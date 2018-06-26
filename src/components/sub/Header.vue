<template>
	<header>
		<div class="container">
			<div class="logo">
				<img src="../../assets/img/logo_sm.png" alt="logo"  />
				<h1>Lawyr</h1>
			</div>
			<div class="links">
				<ul>
					<li v-for="link in links" v-if="!link.href.match('#')"><router-link :to="link.href" :class="{ button: link.action, active: (link.href==$route.path) }">{{ link.title }}</router-link></li>
					<li v-else><a :href="link.href" :class="{ button: link.action, active: (link.href==$route.path) }" v-on:click.prevent="showModals(link.href)">{{ link.title }}</a></li>
				</ul>
			</div>
			<div class="mobile-menu" v-on:click="showMobileMenu=!showMobileMenu"><i class="ic-menu-alt"></i></div>
			<div :class="{ active: showMobileMenu }" class="mobile-menu-modal">
				<i class="ic-cancel" v-on:click="showMobileMenu=!showMobileMenu"></i>
				<h2>MENU</h2>
				<ul>
					<li v-for="link in links" v-if="!link.href.match('#')" v-on:click="showMobileMenu=!showMobileMenu"><router-link :to="link.href" :class="{ active: (link.href==$route.path) }">{{ link.title }}</router-link></li>
					<li v-else v-on:click="showMobileMenu=!showMobileMenu"><a :href="link.href" :class="{ active: (link.href==$route.path) }" v-on:click.prevent="showModals(link.href)">{{ link.title }}</a></li>
				</ul>
			</div>
		</div>
		<Modal title="Sign Up Modal" :plain="1>0" :show="showSignUpModal" :sticky="1<0" :onclose="() => { showSignUpModal = false }">
			<div slot="body">
				<div class="signup">
					<h1>Create an Account</h1>
					<p>Create an account to get started for free</p>
					<form v-on:submit.prevent="submitSignUp">
						<div class="input-wrapper-alt" v-for="field in fields">
							<label class="left">{{ field.label }}</label>
							<div class="wrapp">
								<div :class="{active: errors[field.key]!=''}" class="alert">{{ errors[field.key] }}</div>
								<input :type="(field.key=='password') ? 'password' : 'text'" v-model="values[field.key]" :placeholder="field.ph" />
							</div> 
						</div>
						<button class="alt compat shadow">CONTINUE</button>
					</form>
				</div>
				<div class="welcome" v-show="signupSuccess">
					<h1>Welcome, User.</h1>
					<p>We've sent you a verification email. Meanwhile, upload a profile picture.</p>
					<div class="upload-ball">
						<i class="ic-upload-image"></i>
					</div>

					<div class="upload-buttons">
						<button class="primary compat shadow">SKIP THIS STEP</button> <button class="compat alt shadow" v-on:click="submitSignUp">CONTINUE</button>
					</div>
				</div>
				<div class="done" v-show="uploadSuccess">
					<h1>Done!!!</h1>
					<p>You've successfully signed up for Lawyr. Download the app to start practicing right away!</p>
					<div class="done-ball">
						<i class="ic-double-tick"></i>
					</div>
				</div>
			</div>
		</Modal>

		<Modal title="Contact Modal" :plain="1>0" :show="showContactModal" :sticky="1<0" :onclose="() => { showContactModal = false }">
			<div slot="body">
				<div class="contact">
					<h1>Contact</h1>
					<p>Hi, enter details of your enquiry below</p>
					<form v-on:submit.prevent="submitSignUp">
						<ul class="grid grid-2">
							<li>
								<div class="input-wrapper-alt">
									<label class="left">Name</label>
									<div class="wrapp">
										<div :class="{active: contactNameError=''}" class="alert">{{ contactNameError }}</div>
										<input type="text" v-model="contactName" placeholder="Enter name" />
									</div> 
								</div>
							</li>
							<li>
								<div class="input-wrapper-alt">
									<label class="left">Email</label>
									<div class="wrapp">
										<div :class="{active: contactEmailError=''}" class="alert">{{ contactEmailError }}</div>
										<input type="text" v-model="contactEmail" placeholder="Enter your email address" />
									</div> 
								</div>
							</li>
						</ul>
						<ul class="grid">
							<li class="message-li">
								<div class="input-wrapper-alt">
									<label class="left">Your message</label>
									<textarea placeholder="Enter your message"></textarea>
								</div>
							</li>
						</ul>
						<button class="alt compat shadow">CONTINUE</button>
					</form>
				</div>
			</div>
		</Modal>
	</header>
</template>

<script>
	
	import Modal from '@/components/sub/Modal'

	export default {
		name: 'Header',
		components: { Modal },
		data() { return { showSignUpModal: false, showContactModal: false, showMobileMenu: false, values: { name: '', email: '', username: '', password: '' },
			links: [ 
				{ href: "/", title: "Home" }, 
				{ href: "/features", title: "Features" },
				{ href: "/pricing", title: "Pricing" },
				{ href: "#contact", title: "Contact" },
				{ href: "#signup", title: "Sign Up Free", action: true }
			],
			fields: [
				{ label: 'Name', ph: 'Enter name', key: 'name' },
				{ label: 'Email', ph: 'Enter your email address', key: 'email' },
				{ label: 'Username', ph: 'Enter a new username', key: 'username' },
				{ label: 'Password', ph: 'Enter a new password', key: 'password'}
			],
			errors: { name: '', email: '', username: '', password: '' },
			signupSuccess: false, uploadSuccess: false, contactEmail: '', contactName: '', contactMessage: '',
			contactNameError: '', contactEmailError: ''
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
			},
			showModals(addr) {
				if(addr == '#signup') this.showSignUpModal = true; 
				if(addr == '#contact') this.showContactModal = true; 
			},
			submitSignUp() {
				// if(this.values.name == '') { this.errors['name'] = 'Your fullname is required'; this.clearErrors(); return; }
				// if(!this.values.name.match(' ')) { this.errors['name'] = 'Please enter your fullname'; this.clearErrors(); return; }
				// if(this.values.email == '') { this.errors['email'] = 'Your email is required'; this.clearErrors(); return; }
				// var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				// if(!re.test(String(this.values.email).toLowerCase())) { this.errors['email'] = 'The email you entered is invalid'; this.clearErrors(); return; }
				// if(this.values.username == '') { this.errors['username'] = 'Your username is required'; this.clearErrors(); return; }
				// var ue = /^[^_]([a-z0-9_]{4,20})[^_]$/gi;
				// if(!ue.test(String(this.values.username).toLowerCase())) { this.errors['username'] = 'The username you entered is invalid'; this.clearErrors(); return; }
				// if(this.values.password == '') { this.errors['password'] = 'Your password is required'; this.clearErrors(); return; }
				// if(this.values.password.length < 8) { this.errors['password'] = 'Password is too short'; this.clearErrors(); return; }
				var el = $("#sign-up-modal").$(".signup");
				var od = $("#sign-up-modal").$(".welcome");
				if(el.style.height == '0px') {
					this.reveal(el); this.hide(od, () => { this.signupSuccess = false; });
				}else { this.signupSuccess = true; this.hide(el); this.reveal(od);  }
			},
			clearErrors() {
				setTimeout(() => {
					for(var i = 0; i<$(".alert").length;i++) {
						$(".alert")[i].className = $(".alert")[i].className.replace(" active", '');
					}
					setTimeout(() => { this.errors = { name: '', email: '', username: '', password: '' } }, 350);
				}, 5000);
			},
			hide(el, complete) {
				var h = el.offsetHeight;
				el.style = "height: "+h+"px; overflow: hidden; opacity: 1; transition: all .6s cubic-bezier(.25,.1,.25,1);";
				setTimeout(() => { el.style = "height: 0px; overflow: hidden; transition: all .6s cubic-bezier(.25,.1,.25,1); opacity: 0;"; }, 0.5);
				if(complete) setTimeout(() => { complete() }, 810);
			},
			reveal(el) {
				el.style = "height: auto; overflow: hidden; opacity: 0; transition: all .6s cubic-bezier(.25,.1,.25,1);";
				var h = el.offsetHeight;
				el.style = "height: 0px; overflow: hidden; transition: all .6s cubic-bezier(.25,.1,.25,1); opacity: 0;"; 
				setTimeout(() => { 
					el.style = "height: "+h+"px; overflow: hidden; transition: all .6s cubic-bezier(.25,.1,.25,1); opacity: 1;"; }, 0.5);
			}
		},
		mounted() {
			// function checkScroll() {
			// 	var y = $("#app").scrollTop;
			// 	if(y < 100) {
			// 		var alpha = y/100 - 0.25;
			// 		var padding = 40 - (Math.min(y, 20 * 8) * 0.2197);
			// 		$(">header").style = 'background-color: rgba(17, 42, 73, '+alpha+'); box-shadow: 0px 10px 20px rgba(17, 42, 73, '+alpha+'); ';
			// 		$(">header").$(".container").style = 'padding-top: '+padding+'px;';
			// 	}else {
			// 		$(">header").style = 'background-color: rgba(17, 42, 73, 0.75); box-shadow: 0px 10px 20px rgba(17, 42, 73, 0.75); ';
			// 		$(">header").$(".container").style = 'padding-top: 20px;';
			// 	}
			// }
			// $("#app").onscroll = function(e) { 
			// 	checkScroll();
			// }
			// window.onresize = function() {
			// 	checkScroll();
			// }
		}
	}
</script>