<template>
	<div class="p-main">
		<section class="home" id="home">
			<div class="container main-container">
				<div class="bg-box"></div>
				<div class="text-container">
					<h1>An Easy way for an Easy A</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
					<div class="buttons">
						<button class="alt">Sign Up</button> <button class="bordered">Learn More</button>
					</div>
				</div>
				<div class="image-container">
					<!-- <img class="gavel" src="../assets/img/hammer.png" alt="gavel" /> -->
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
					<div class="particles"><span class="part-one"></span><span class="part-two"></span><span class="part-three"></span><span class="part-four"></span></div>
					<div class="ball-icon"><i class="ic-group"></i><label>Corporate Law Practice</label></div>
					<div class="ball-icon"><i class="ic-olive"></i><label>Professional Ethics and Skills</label></div>
					<div class="ball-icon"><i class="ic-university"></i><label>Property Law Practice</label></div>
					<div class="ball-icon"><i class="ic-book"></i><label>Civil Litigation</label></div>
					<div class="ball-icon"><i class="ic-handcuffs"></i><label>Criminal Litigation</label></div>
					<div class="bow">
						<h3>Take a Test</h3>
						<p>Swipe up to Start</p>
						<i class="ic-caret up"></i>
					</div>
				</div>
			</div>
		</section>
		<section class="flashcard">
			<div class="container">
				<div class="text-container">
					<div class="xbadge">Flashcards</div>
					<h1>An Easy way for an Easy A</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
				</div>
				<div class="image-container">
					<img class="curves" src="../assets/img/background_curve.svg" alt="curves" />
					<div class="particles"><span class="part-one"></span><span class="part-two"></span><span class="part-three"></span><span class="part-four"></span></div>
					<div class="card card-one">
						<h4>Title of the <br/>Flashcard?</h4>
						<p>Practice from a broad range of questions tailored to your progress to ensure you pass your examinations. Practice from a broad range of questions tailored to your progress to ensure you pass your examinations. Practice from a broad range of questions tailored to your progress to ensure you pass your examinations. Practice from a broad range of questions tailored to your progress to ensure you pass your examinations. Practice from a broad range of questions tailored to your progress.</p>
					</div>
					<div class="card card-two"><h2>Title of the <br/>Flashcard?</h2></div>
				</div>
			</div>
		</section>
		<section class="group">
			<div class="container">
				<div class="text-container">
					<div class="xbadge">Group Tests</div>
					<h1>An Easy way for an Easy A</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law School examinations with nothing but your mobile phone.</p>
				</div>
				<div class="image-container">
					<img class="curves" src="../assets/img/background_curve.svg" alt="curves" />
					<div class="particles"><span class="part-one"></span><span class="part-two"></span><span class="part-three"></span><span class="part-four"></span></div>
					<img class="group-card" src="../assets/img/group_card.svg" alt="group card" />
					<img class="user-one" src="../assets/img/user_green.svg" alt="user one" />
					<img class="user-two" src="../assets/img/user_green.svg" alt="user two" />
					<img class="user-three" src="../assets/img/user_green.svg" alt="user three" />
				</div>
			</div>
		</section>
		<section class="curated">
			<div class="background">
				<h1>Why Use Lawyr?</h1>
			</div>
			<div class="container">
				<ul class="grid grid-3 trophies">
					<li>
						<div class="troph">
							<img src="../assets/img/winner.svg" alt="winner trophy" />
							<h3>Monitor Your Progress</h3>
							<p>See where your strengths and weaknesses lie and monitor your progress as you improve on your speed and accuracy in answering questions</p>
						</div>
					</li>
					<li>
						<div class="troph alt">
							<img src="../assets/img/discussion.svg" alt="discussion trophy" />
							<h3>Create Your Flashcard</h3>
							<p>Lawyr allows you customise your revision tools to suit your peculiar learning goals</p>
						</div>
					</li>
					<li>
						<div class="troph">
							<img src="../assets/img/partner.svg" alt="partner trophy" />
							<h3>Made By Professional</h3>
							<p>Lawyr was created by Law Professionals, just like you. With a collection of questions spanning 10 years, Lawyr is loaded with enough content to help you prepare adequately</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<footer>
			<div class="container">
				<h1>Get Started for Free</h1>
				<p>Download Lawyr</p>
				<div class="download">
					<a href="#"><img src="../assets/img/app_store.png" alt="App Store" /></a>
					<a href="#"><img src="../assets/img/googleplay.png" alt="App Store" /></a>
				</div>
				<h1>Subscribe to stay up to date with Lawyr</h1>
				<div class="input-wrapper">
					<input type="text" placeholder="Enter Email Address" />
					<button class="alt">Subscribe</button>
				</div>
				<div><span>&copy; Lawyr 2018</span></div>
			</div>
		</footer>
	</div>
</template>


<script>
	export default {
		name: 'Welcome',
		data() { return { } }
	}
</script>