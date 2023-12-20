<script lang="ts" setup>
const faqs = ref([
	{
		question: 'What do I get with the landing page audit?',
		answer: 'Vue.js is a progressive JavaScript framework for building user interfaces.',
		expanded: false,
	},
	{
		question: 'How much does it cost?',
		answer: 'You can install Vue.js using npm or yarn. For example, "npm install vue" or "yarn add vue".',
		expanded: false,
	},
	{
		question: 'What is Hero CRO?',
		answer: 'You can install Vue.js using npm or yarn. For example, "npm install vue" or "yarn add vue".',
		expanded: false,
	},
	{
		question: 'Why audit in a video format?',
		answer: 'You can install Vue.js using npm or yarn. For example, "npm install vue" or "yarn add vue".',
		expanded: false,
	},
	{
		question: 'How long does a typical landing page audit last?',
		answer: 'You can install Vue.js using npm or yarn. For example, "npm install vue" or "yarn add vue".',
		expanded: false,
	},
	{
		question: 'What if my conversions didn’t increased?',
		answer: 'You can install Vue.js using npm or yarn. For example, "npm install vue" or "yarn add vue".',
		expanded: false,
	},
	{
		question: 'Can you implement the changes named in the audit?',
		answer: 'You can install Vue.js using npm or yarn. For example, "npm install vue" or "yarn add vue".',
		expanded: false,
	},
]);

const toggleAnswer = (index) => {
	faqs.value[index].expanded = !faqs.value[index].expanded;
};
</script>
<template>
	<section
		class="mt-200 mb-200 container mx-auto text-center section-padding"
	>
		<Label class="mb-40">
			CONVERSION RATE OPTIMIZATION TO GENERATE MORE SALES
		</Label>
		<h1 class="text-h1 mb-24">Grow your business with an in-depth landing page audit</h1>
		<p class="text-body-1 mb-40">Get personalized insights to turn your landing page visitors into loyal customers.</p>
		<Button class="mb-24">Order audit now</Button>
		<p class="text-body-3">100% money-back guarantee if your conversion rate doesn't increase</p>
	</section>

	<div class="border-t-2 border-b-2 border-dark">
		<section class="md:container mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div class="border-b-2 md:border-r-2 lg:border-r-0 lg:border-b-0 border-dark md:pl-0 p-44">
					<p class="mb-8 text-h5">SEO audit breakdown</p>
					<p class="text-body-2">Using SEO tools to check the headlines structure and how well they perform on search engines.</p>
				</div>
				<div class="border-b-2 lg:border-l-2 lg:border-r-2 lg:border-b-0 border-dark p-44">
					<p class="mb-8 text-h5">UX audit breakdown</p>
					<p class="text-body-2">Making sure that visitors can easily navigate and reach content on the landing page.</p>
				</div>
				<div class="p-44 border-b-2 md:border-b-0 md:border-r-2 md:pl-0 pr-44 py-44 lg:px-44 lg:border-r-2 border-dark ">
					<p class="mb-8 text-h5">Content audit breakdown</p>
					<p class="text-body-2">Evaluating content on the landing page and how well it describes the business or it’s services.</p>
				</div>
				<div class="p-44 pr-0">
					<p class="mb-8 text-h5">Technical audit breakdown</p>
					<p class="text-body-2">Using security tools to check the speed and responsiveness of the landing page for visitors.</p>
				</div>
			</div>
		</section>
	</div>

	<div class="bg-blue py-120 border-b-2 border-dark">
		<section class="container mx-auto">
			<h2 class="mb-16 text-center">How it works?</h2>
			<p class="text-body-2 text-gray max-w-[560px] mb-48 text-center mx-auto">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 justify-between">
				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconNumberOne class="mb-24" />
					<h3 class="text-h5 mb-8">Order your landing page or e-commerce audit</h3>
					<p class="text-body-2 text-gray">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>
				</div>

				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconNumberTwo class="mb-24" />
					<h3 class="text-h5 mb-8">Fill the questionnaire as detailed as possible</h3>
					<p class="text-body-2 text-gray">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>
				</div>

				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconNumberThree class="mb-24" />
					<h3 class="text-h5 mb-8">Receive personalized audit in a video format</h3>
					<p class="text-body-2 text-gray">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>
				</div>

				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconNumberFour class="mb-24" />
					<h3 class="text-h5 mb-8">Make changes to boost conversions</h3>
					<p class="text-body-2 text-gray">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>
				</div>
			</div>
		</section>
	</div>

	<div class="border-b-2 flex border-dark">
		<section class="w-1/2 border-r-2 border-dark">
			<div class="border-b-2 border-dark pt-120 p-80">
				<h2 class="text-h1 mb-24">What is Hero CRO? </h2>
				<p class="text-body-1 text-gray mb-24">Hero CRO (Conversion Rate Optimization) is an optimization of the top section of your landing page which visitors see at first after visiting the page.</p>
				<div class="mb-40">
					<div class="mb-16 flex gap-8 items-center">
						<IconCheckmark />
						<span class="text-h5">Optimizing the navigation</span>
					</div>
					<div class="mb-16 flex gap-8 items-center">
						<IconCheckmark />
						<span class="text-h5">Building trust through testimonials</span>
					</div>
					<div class="mb-16 flex gap-8 items-center">
						<IconCheckmark />
						<span class="text-h5">Ensuring clear content</span>
					</div>
				</div>
				<Button>
					Order Hero CRO
				</Button>
			</div>

			<div class="p-80">
				<IconFigma class="mb-20" />
				<p class="text-h5 mb-8">Shared Figma page to make changes easily implemented</p>
				<p class="text-body-2">Figma shines with its incredible flexibility—perfect for making landing page changes a breeze. Developers love having all the elements in one spot for easy, creative tweaks!</p>
			</div>
		</section>

		<div class="bg-[#E6E6E6] w-1/2">
		</div>
	</div>

	<div class="border-b-2 flex border-dark">
		<section class="w-1/2 border-r-2 border-dark">
			<div class="h-full flex items-center p-160 bg-blue">
				<img
					src="@/assets/image/rytis.png"
					width="640"
					height="640"
				/>
			</div>
		</section>

		<div class="py-200 px-80 w-1/2">
			<h2 class="text-h1 mb-24">Hi, I’m Rytis</h2>
			<p class="text-body-2 mb-24">I bet you're here to uncover the wizard behind the audits and the impressive results you're about to witness.</p>
			<p class="text-body-2 mb-24">Let me spill a few highlights of my journey:</p>

			<div class="mb-40">
				<div class="mb-16 flex gap-8 items-center">
					<IconCheckmark />
					<span class="text-h5">Developed a design system and mobile/desktop apps for a leading KYC/AML product in Lithuania, verifying 200K+ users monthly</span>
				</div>
				<div class="mb-16 flex gap-8 items-center">
					<IconCheckmark />
					<span class="text-h5">Founded and moderate a 20K+ member community for product design enthusiasts</span>
				</div>
				<div class="mb-16 flex gap-8 items-center">
					<IconCheckmark />
					<span class="text-h5">Designed and maintained 100+ startup landing pages with monthly updates</span>
				</div>
				<div class="mb-16 flex gap-8 items-center">
					<IconCheckmark />
					<span class="text-h5">Lectured as a product design instructor for 4 years at a top Lithuanian private academy</span>
				</div>
			</div>
		</div>
	</div>

	<section class="border-b-2 border-dark bg-blue-dark py-120">
		<div class="container mx-auto ">
			<h2 class="mb-16 text-center text-white text-h2">Frequently Asked Questions</h2>
			<p class="mb-40 text-center text-white text-body-2 max-w-[56rem] mx-auto">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>

			<div
				v-for="(faq, index) in faqs"
				:key="index"
				class="faq-item"
				:class="{ 'faq-item--active': faq.expanded }"
				@click="toggleAnswer(index)"
			>
				<div class="question">
					<span class="text-h3 text-inherit">{{ faq.question }}</span>
					<IconChevronDown
						:class="{ 'text-dark rotate-180': faq.expanded }"
					/>
				</div>
				<div
					v-show="faq.expanded"
					:class="{ 'mt-16': faq.expanded }"
					class="answer text-body-2"
				>
					{{ faq.answer }}
				</div>
			</div>
		</div>
	</section>

	<section class="bg-yellow py-120">
		<div class="container mx-auto text-center">
			<h2 class="mb-24 text-center text-dark text-h2">Are you ready to receive more customers?</h2>
			<p class="mb-40 text-center text-dark text-body-2 max-w-[56rem] mx-auto">I’ve already helped hundreds of businesses worldwide to reach more visitors and convert the increase into customers.</p>

			<Button color="white">Order audit now</Button>
		</div>
	</section>
</template>

<style>
.fill-number {
	fill: #5258F3;
	stroke-width: 2px;
	stroke: #000;
}

.faq-item {
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 16px;
  border: 2px solid #000;
  padding: 3.2rem;
transition: all 0.1s ease-in-out;
}

.faq-item--active {
	background-color: #fff;
}

.faq-item--active .question {
	color: #000;
}

.question {
  cursor: pointer;
  display: flex;
  background-color: transparent;
  color: #fff;
  justify-content: space-between;
  align-items: center;
}

.icon {
  font-size: 20px;
}

.answer.active {
  display: block;
}
</style>
