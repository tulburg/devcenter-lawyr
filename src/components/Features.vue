<template>
	<div class="p-main">
		<section class="features">
			<div class="container">
				<img class="looper" src="../assets/img/looper.svg" alt="background" />
				<div class="ball">
					<h1>Features Made <br/>For You.</h1>
					<p>Made for Law Students, Lawyr helps you study for your Law <br/>School examinations with nothing but your mobile phone.</p>
					<i class="ic-caret down"></i>
				</div>
			</div>
		</section>	
		<section class="points">
			<div class="container">
				<ul class="grid grid-3">
					<li><div class="spot ad"><i class="ic-ad"></i><h3>Create your flashcards</h3><p>Create your flashcards to suit your<br/> peculiar study outcomes and needs</p></div></li>
					<li><div class="spot group"><i class="ic-group"></i><h3>Connect with a community of peers</h3><p>Take tests as a single user or as a group</p></div></li>
					<li><div class="spot graph"><i class="ic-graph"></i><h3>Monitor your progress</h3><p>Monitor the progress you make in each module and your overall readiness for exams</p></div></li>
				</ul>
				<ul class="grid grid-3">
					<li><div class="spot time"><i class="ic-time"></i><h3>Improve your speed and accuracy</h3><p>Adjust the time for each test to challenge yourself and improve your speed as you progress</p></div></li>
					<li><div class="spot tick"><i class="ic-double-tick"></i><h3>View corrections and explanations</h3><p>Understand the rationale behind the correct answers to ensure you don't miss it again</p></div></li>
					<li><div class="spot reminder"><i class="ic-bell"></i><h3>Set reminders</h3><p>Prepare a schedule for revision and set reminders for study and revision</p></div></li>
				</ul>
			</div>
		</section>
		<footer>
			<div class="container">
				<h1>Get Started for Free</h1>
				<p>Download Lawyr</p>
				<div class="input-wrapper">
					<input type="text" placeholder="Enter Email Address" />
					<button class="alt">Sign Up</button>
				</div>
				<div class="download">
					<a href="#"><img src="../assets/img/app_store.png" alt="App Store" /></a>
					<a href="#"><img src="../assets/img/googleplay.png" alt="App Store" /></a>
				</div>

				<span>&copy; Lawyr 2018</span>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Features'
	}
</script>