<template>
	<div class="modal" :id="title.toLowerCase().replace(/( )/g, '-')">
		<transition name="overlay-transition">
			<div :class="{ active: showing }" class="overlay" v-show="showing"></div>
		</transition>
		<transition name="modal-transition">
			<div class="dialog-container" align="center" v-on:click="close" v-show="showing">
				<div class="dialog">
					<div class="dialog-header" v-show="!plain">
						<div class="header">{{ title }}</div>
						<div class="close" v-on:click="closeFinal"><i class="ic-cancel"></i></div>
					</div>
					<div class="body">
						<slot name="body"/>
					</div>
					<div class="footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "Modal",
		props: { title: { type: String, default: "" }, show: Boolean, sticky: false, onclose: Function, plain: false },
		data() {
			return { showing: false }
		},
		methods: {
			close(e) { if(!this.sticky && e.target.className == "dialog-container") { this.showing=false; this.onclose(); } },
			closeFinal() { this.showing = false; this.onclose(); }
		},
		watch: {
			show: function(show) {
				this.showing = show;
				if(!show) { $(">body").style="" }
				else { $(">body").style="overflow: hidden;" }
			}
		},
		mounted() {
		}
	}
</script>