<template>
	<Html lang="en" class="h-full">
		<Body class="h-full">
			<NuxtLayout>
				<SeoKit />
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">

const loadSenjaScriptAfterHydration = () => {
	const script = document.createElement('script');

	script.src = 'https://static.senja.io/dist/platform.js';
	script.async = true;
	script.defer = true;
	document.head.appendChild(script);
};

const loadGTAGAfterHydration = () => {
	const script = document.createElement('script');

	script.src = 'https://www.googletagmanager.com/gtag/js?id=G-72DKRQNVKK';
	script.async = true;
	script.defer = true;
	document.head.appendChild(script);
};

onMounted(() => {
	setTimeout(() => {
		loadSenjaScriptAfterHydration();
	}, 1500);

	setTimeout(() => {
		loadGTAGAfterHydration();
	}, 4000);
});

useHead({
	titleTemplate: 'Audit My Landing Page',
	link: [
		{
			rel: 'apple-touch-icon',
			type: 'image/png',
			href: '/favicon-16x16.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-16x16.png',
			sizes: '16x16x',

		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-32x32.png',
			sizes: '32x32',
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest',
		},
		{
			rel: 'mask-icon',
			href: '/safari-pinned-tab.svg',
			color: '#000000',
		},
	],
	meta: [
		{
			name: 'msapplication-TileColor',
			content: '#da532c',
		},
		{
			name: 'theme-color',
			content: '#FFFFFF',
		},
	],
});
</script>
