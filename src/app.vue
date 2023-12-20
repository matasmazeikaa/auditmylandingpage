<template>
	<Html
		lang="en"
		class="h-full"
	>
		<Body class="h-full">
			<NuxtLayout class="h-full">
				<SeoKit />
				<NuxtPage class="h-full"/>
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
const context = useNuxtApp();

useHead({
	titleTemplate: '%s',
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
		{
			hid: 'og:image',
			property: 'og:image',
			// content: ogImageThumbnail.value,
		},
		{
			hid: 'twitter:image',
			property: 'twitter:image',
			// content: ogImageThumbnail.value,
		},
	],
});
</script>
