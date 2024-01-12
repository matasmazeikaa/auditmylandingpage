<script lang="ts" setup>
import {
	AUDIT_LINK, HERO_CRO_LINK,
} from '~/constants';

const faqs = ref([
	{
		question: 'What do I get with the landing page audit?',
		answer: 'With the landing page audit, you get a brief video recording up to 20 minutes of me going through your landing page and commenting on the content there. Additionally, I check the SEO, UX, Content, and Technical specifications of the landing page to give more information so you can improve your conversion rate as quickly as possible.',
		expanded: false,
	},
	{
		question: 'How much does it cost?',
		answer: 'A landing page audit costs only $99. There’s no better option to get in-depth insights about your landing page and conversion rate optimization solutions to convert more visitors into customers.',
		expanded: false,
	},
	{
		question: 'What is Hero CRO?',
		answer: `The hero section is the first thing visitors see on your website, and optimizing it can significantly impact user engagement and conversions.

My Hero CRO (Conversion Rate Optimization) service involves redesigning this crucial element to make a strong, positive impression and guide visitors toward conversion. It's an excellent option for those looking to enhance their website's overall performance.`,
		expanded: false,
	},
	{
		question: 'Why audit in a video format?',
		answer: 'Based on my experience working with various enterprises and businesses, it’s the best way to conduct an audit clearly and understandably for the client.',
		expanded: false,
	},
	{
		question: 'How long does a typical landing page audit last?',
		answer: 'Typically the landing page audit lasts up to 20 minutes but in some cases, it can take longer than 30 minutes just because there are plenty of fixes that should be solved to upgrade the website to the next stage.',
		expanded: false,
	},
	{
		question: 'What if my conversions didn’t increased?',
		answer: 'No worries, I’ll refund! Just contact me at hello@auditmylandingpage.com',
		expanded: false,
	},
	{
		question: 'Can you implement the changes named in the audit?',
		answer: 'Sure! Just contact me at hello@auditmylandingpage.com with the details and I’ll get back to you with the details of my services.',
		expanded: false,
	},
]);

const toggleAnswer = (index: number) => {
	faqs.value[index].expanded = !faqs.value[index].expanded;
};

const setHeroCroSize = () => {
	const aboutAudit = document.getElementById('about-audit');
	const header = document.getElementById('header');
	const aboutAuditHeight = aboutAudit?.offsetHeight;
	const headerHeight = header?.offsetHeight;
	const heroCro = document.getElementById('hero-cro');

	if (heroCro && window.innerWidth > 1023) {
		heroCro.style.height = `calc(100vh - ${aboutAuditHeight}px - ${headerHeight}px)`;
	} else {
		heroCro.style.height = 'auto';
	}
};

if (!process.server) {
	window.addEventListener('resize', () => {
		setHeroCroSize();
	});
}
</script>

<template>
	<div>
		<section id="hero-cro" class="hero-cro flex items-center bg-blue py-80 md:py-[10vh]">
			<div
				class="container mx-auto text-center section-padding"
			>
				<Label class="mb-40">
					CONVERSION RATE OPTIMIZATION TO GENERATE MORE SALES
				</Label>
				<h1 class="text-h1-mobile md:text-h1 mb-24">Grow your business with an in-depth landing page audit</h1>
				<p class="text-body-1 mb-40">Get personalized insights to turn your landing page visitors into loyal customers.</p>
				<Button :to="AUDIT_LINK" target="_blank" class="mb-24">Order audit now</Button>
				<p class="text-body-3">100% money-back guarantee if your conversion rate doesn't increase</p>
			</div>
		</section>

		<div id="about-audit" class="border-t-2 bg-blue border-b-2 border-dark">
			<section class="md:container mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div class="border-b-2 md:border-r-2 lg:border-r-0 lg:border-b-0 border-dark md:pl-0 px-20 py-32 md:p-44">
						<p class="mb-8 text-h5">SEO audit breakdown</p>
						<p class="text-body-2">Using SEO tools to check the headlines structure and how well they perform on search engines.</p>
					</div>
					<div class="border-b-2 lg:border-l-2 lg:border-r-2 lg:border-b-0 border-dark px-20 py-32 md:p-44">
						<p class="mb-8 text-h5">UX audit breakdown</p>
						<p class="text-body-2">Making sure that visitors can easily navigate and reach content on the landing page.</p>
					</div>
					<div class="p-44 border-b-2 md:border-b-0 md:border-r-2 md:pl-0 px-20 py-44 lg:px-44 lg:border-r-2 border-dark ">
						<p class="mb-8 text-h5">Content audit breakdown</p>
						<p class="text-body-2">Evaluating content on the landing page and how well it describes the business or it’s services.</p>
					</div>
					<div class="px-20 py-32 md:p-44 pr-0">
						<p class="mb-8 text-h5">Technical audit breakdown</p>
						<p class="text-body-2">Using security tools to check the speed and responsiveness of the landing page for visitors.</p>
					</div>
				</div>
			</section>
		</div>
	</div>

	<div class="bg-blue-dark py-80 md:py-120 border-b-2 border-dark" >
		<section class="section-padding container mx-auto">
			<h2 class="mb-8 md:mb-16 text-center text-h2 text-white">How it works?</h2>
			<p class="text-body-2 text-gray max-w-[560px] mb-24 md:mb-48 text-center mx-auto text-white">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 justify-between">
				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconWave class="mb-24" />
					<h3 class="text-h5 mb-8 text-white">Order your landing page or e-commerce audit</h3>
					<p class="text-body-2 text-gray text-white">Kickstart your transformation! Select your audit type to unlock tailored insights for conversion success.</p>
				</div>

				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconCheckList class="mb-24" />
					<h3 class="text-h5 mb-8 text-white">Fill the questionnaire as detailed as possible</h3>
					<p class="text-body-2 text-gray text-white">Dive deep into goals. Your detailed responses guide personalized recommendations for business alignment.</p>
				</div>

				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconFilmSlate class="mb-24" />
					<h3 class="text-h5 mb-8 text-white">Receive personalized audit in a video format</h3>
					<p class="text-body-2 text-gray text-white">Absorb insights with a personalized video audit, optimizing user experience for boosted conversions.</p>
				</div>

				<div class="border-2 border-dark p-24 rounded-[24px]">
					<IconRocket class="mb-24" />
					<h3 class="text-h5 mb-8 text-white">Make changes to boost conversions</h3>
					<p class="text-body-2 text-gray text-white">Action time! Apply recommendations to transform visitors into loyal customers and elevate conversion rates.</p>
				</div>
			</div>
		</section>
	</div>

	<div id="hero-cro-explain" class="border-b-2 flex flex-col md:flex-row border-dark">
		<section class="w-full md:w-1/2 border-r-2 border-dark">
			<div class="border-b-2 border-dark py-80 px-20 md:pt-120 md:p-80">
				<div class="max-w-[56rem] ml-auto">
					<h2 class="text-h1 mb-24">What is Hero CRO? </h2>
					<p class="text-body-1 text-black mb-24">Hero CRO (Conversion Rate Optimization) is an optimization of the top section of your landing page which visitors see at first after visiting the page.</p>
					<div class="mb-40">
						<div class="mb-16 flex gap-8 items-center">
							<IconShapes />
							<span class="text-h5">Optimizing the navigation</span>
						</div>
						<div class="mb-16 flex gap-8 items-center">
							<IconShapes />
							<span class="text-h5">Building trust through testimonials</span>
						</div>
						<div class="mb-16 flex gap-8 items-center">
							<IconShapes />
							<span class="text-h5">Ensuring clear content</span>
						</div>
					</div>
					<Button :to="HERO_CRO_LINK" target="_blank">
						Order Hero CRO
					</Button>
				</div>
			</div>

			<div class="py-80 px-20 md:p-80 border-b-2 border-dark mb:border-b-0">
				<div class="ml-auto max-w-[56rem]">
					<IconFigma class="mb-20" />
					<p class="text-h5 mb-8">Shared Figma page to make changes easily implemented</p>
					<p class="text-body-2">Figma shines with its incredible flexibility—perfect for making landing page changes a breeze. Developers love having all the elements in one spot for easy, creative tweaks!</p>
				</div>
			</div>
		</section>

		<div class="bg-[#E6E6E6] w-full  md:w-1/2 py-40 px-20 md:p-60 bg-yellow flex justify-start items-center">
			<IconAudit />
		</div>
	</div>

	<div id="affiliate" class="border-b-2 flex flex-col md:flex-row border-dark">
		<section class="w-full md:w-1/2 border-r-2 border-b-2 md:border-b-0 border-dark">
			<div class="h-full flex items-center justify-end py-40 px-20 md:p-80 bg-blue">
				<img
					src="@/assets/image/rytis.png"
					width="640"
					height="640"
				/>
			</div>
		</section>

		<div class="py-80 px-20 md:py-200 md:px-80 w-full md:w-1/2">
			<h2 class="text-h1 mb-24">Hi, I’m Rytis</h2>
			<p class="text-body-2 mb-24">I bet you're here to uncover the wizard behind the audits and the impressive results you're about to witness.</p>
			<p class="text-body-2 mb-24">Let me spill a few highlights of my journey:</p>

			<div class="mb-40">
				<div class="mb-16 flex gap-8 items-center">
					<IconShapes />
					<span class="text-h5">Developed a design system and mobile/desktop apps for a leading KYC/AML product in Lithuania, verifying 200K+ users monthly</span>
				</div>
				<div class="mb-16 flex gap-8 items-center">
					<IconShapes />
					<span class="text-h5">Founded and moderate a 20K+ member community for product design enthusiasts</span>
				</div>
				<div class="mb-16 flex gap-8 items-center">
					<IconShapes />
					<span class="text-h5">Designed and maintained 100+ startup landing pages with monthly updates</span>
				</div>
				<div class="mb-16 flex gap-8 items-center">
					<IconShapes />
					<span class="text-h5">Lectured as a product design instructor for 4 years at a top Lithuanian private academy</span>
				</div>
			</div>
		</div>
	</div>

	<section id="faq" class="border-b-2 border-dark bg-blue-dark px-20 py-80 md:py-120">
		<div class="container mx-auto max-w-[81.6rem]">
			<h2 class="mb-16 text-center text-white text-h2">Frequently Asked Questions</h2>
			<p class="mb-40 text-center text-white text-body-2 max-w-[56rem] mx-auto">Curious about something? Dive into frequently asked questions for quick answers. I am here to help you find what you're looking for.</p>

			<div
				v-for="(faq, index) in faqs"
				:key="index"
				class="faq-item "
				:class="{ 'faq-item--active': faq.expanded }"
				@click="toggleAnswer(index)"
			>
				<div class="question flex gap-20">
					<span class="text-h3 text-inherit">{{ faq.question }}</span>
					<IconChevronDown
						class="min-w-24"
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

	<section class="bg-yellow section-padding py-80 md:py-120">
		<div class="container mx-auto text-center">
			<h2 class="mb-24 text-center text-dark text-h2">Are you ready to receive more customers?</h2>
			<p class="mb-40 text-center text-dark text-body-2 max-w-[56rem] mx-auto">I’ve already helped hundreds of businesses worldwide to reach more visitors and convert the increase into customers.</p>

			<Button color="white" :to="AUDIT_LINK" target="_blank">Order audit now</Button>
		</div>
	</section>
</template>

<style>

@media (min-width: 1023px) {
	.hero-cro {
		height: calc(100vh - 88px - 244px)
	}
}

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
