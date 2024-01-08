<script lang="ts" setup>
import { NAVIGATION_LINKS } from '~/constants';

</script>

<template>
	<footer class="border-t-2 border-dark section-padding bg-primary-black py-40 md:py-80">
		<div class="container mx-auto flex flex-col items-center justify-center">
			<IconLogo class="mb-24 md:mb-76"/>
			<div class="mb-40 grid grid-cols-1 md:grid-cols-4 place-items-center">
				<NuxtLink
					v-for="link in NAVIGATION_LINKS"
					:key="link.title"
					:to="link.to"
					class="link py-28 px-16"
				>
					{{ link.title }}
				</NuxtLink>
			</div>

			<div class="mb-48 flex gap-16 flex-wrap">
				<a target="_blank" href="https://twitter.com/auditmy_lp" class="social-media-link">
					<IconX />
				</a>
				<a target="_blank" href="https://www.linkedin.com/company/audit-my-landing-page" class="social-media-link">
					<IconLinkedin />
				</a>
				<a target="_blank" href="https://www.instagram.com/auditmylandingpage" class="social-media-link">
					<IconInstagram />
				</a>
			</div>

			<div class="text-body-2">
				© {{ new Date().getFullYear() }} Audit My Landing Page. All rights reserved.
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer-link:hover {
	transition: all 0.1s ease-in;
	background: black;
}
.footer-top-part {
	display: flex;
	flex-direction: column-reverse;
	grid-gap: 4rem;
}

@screen md {
	.footer-top-part {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}
</style>
