<script lang="ts" setup>
const LINKS = [
	{
		title: 'About audit',
		to: '/',
	},
	{
		title: 'Hero CRO',
		to: '/',
	},
	{
		title: 'Examples',
		to: '/',
	},
	{
		title: 'Affiliate',
		to: '/',
	},
	{
		title: 'Contact',
		to: '/',
	},
];
</script>

<template>
	<footer class="border-t-2 border-dark section-padding bg-primary-black py-80">
		<div class="container mx-auto flex flex-col items-center justify-center">
			<IconLogo class="mb-76"/>
			<div class="mb-40">
				<NuxtLink
					v-for="link in LINKS"
					:key="link.title"
					:to="link.to"
					class="link hover:bg-blue transition-colors py-28 px-16"
				>
					{{ link.title }}
				</NuxtLink>
			</div>

			<div class="mb-48 flex gap-16 flex-wrap">
				<NuxtLink class="flex justify-center items-center p-12 shadow-[2px_2px_0px_0px_#000] rounded-[10rem] border-2 border-solid border-dark">
					<IconX />
				</NuxtLink>
				<NuxtLink class="flex justify-center items-center p-12 shadow-[2px_2px_0px_0px_#000] rounded-[10rem] border-2 border-solid border-dark">
					<IconLinkedin />
				</NuxtLink>
				<NuxtLink class="flex justify-center items-center p-12 shadow-[2px_2px_0px_0px_#000] rounded-[10rem] border-2 border-solid border-dark">
					<IconInstagram />
				</NuxtLink>
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
