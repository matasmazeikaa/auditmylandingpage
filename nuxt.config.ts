const APP_META = {
	title: 'Audit My Landing Page',
	description: "Optimize your landing page with Audit My Landing Page's $99 Hero CRO audit. Improve SEO, enhance navigation, and boost conversions. Backed by a 100% money-back guarantee. Order now. © 2024 Audit My Landing Page.",
	favicon: '/favicon.ico',
	url: 'https://auditmylandingpage.com',
	language: 'en',
};

export default defineNuxtConfig({
	// app config
	extends: ['nuxt-seo-kit'],

	// server side rendering
	ssr: true,

	// source directory
	srcDir: 'src',

	// alias
	alias: {
		modules: '~/modules',
	},

	// runtime config
	runtimeConfig: {
		public: {
			siteUrl: APP_META.url || 'https://example.com',
			siteName: APP_META.title,
			siteDescription: APP_META.description,
			language: APP_META.language,
		},
	},

	// typescript
	typescript: {
		typeCheck: true,
		tsConfig: {
			compilerOptions: {
				forceConsistentCasingInFileNames: true,
			},
		},
	},

	// components
	components: {
		dirs: [
			{
				path: '~/components',
				pathPrefix: false,
			},
		],
	},

	// imports
	imports: {
		dirs: [
			'stores',
			'composables',
		],
	},

	// modules
	modules: [
		'@nuxtjs/strapi',
		'@formkit/nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'@unlighthouse/nuxt',
		'@vueuse/nuxt',
		'nuxt-headlessui',
		'@nuxtjs/eslint-module',
	],

	eslint: {
		eslintPath: 'eslint',
	},

	// module options
	// google fonts
	googleFonts: {
		families: {
			Roboto: true,
			Nunito: [500],
			Raleway: [
				400,
				500,
				600,
				700,
			],
			Montserrat: [
				400,
				500,
				600,
				700,
			],
			'Open Sans': [
				400,
				500,
				600,
				700,
			],
		},
	},

	// headlessui
	headlessui: {
		prefix: 'H',
	},

	// unlighthouse
	unlighthouse: {},
});
