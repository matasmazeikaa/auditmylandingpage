<script lang="ts" setup>
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';

interface Props {
	white?: boolean;
}

const headerRef = ref<HTMLElement | null>(null);

defineProps<Props>();

const items = computed(() => [
	{
		to: '/iranga',
		title: 'About audit',
	},
	{
		to: '/servisas',
		title: 'Hero CRO',
	},
	{
		to: '/apie-mus',
		title: 'Examples',
	},
	{
		to: '/kontaktai',
		title: 'Affiliates',
	},
	{
		to: '/kontaktai',
		title: 'Contact',
	},
].filter(Boolean));

const isMobileMenuOpen = ref(false);

watch(isMobileMenuOpen, (value) => {
	if (value) {
		disableBodyScroll(document.body);
	} else {
		enableBodyScroll(document.body);
	}
});
</script>

<template>
	<header
		ref="headerRef"
		class="header bg-blue"
	>
		<nav class="h-full px-20 lg:pl-40 border-b-2 border-t-2 border-black">
			<div class="h-full flex justify-between items-center mx-auto">
				<div class="flex justify-between items-center w-full ">
					<NuxtLink
						to="/"
						class="w-[9.1rem] h-[3.2rem] md:h-40 lg:w-[12.4rem] mr-24 z-10"
						aria-label="Home"
					>
						<IconLogo
							class="w-full h-full"
						/>
					</NuxtLink>

					<div class="flex items-center gap-32">
						<ul
							class="gap-32 hidden items-center lg:flex"
						>
							<li
								v-for="(item, index) in items"
								:key="item.title"
								class="cursor-pointer dropdown"
							>
								<NuxtLink
									:to="item.to"
									class="py-28 px-16 link"
								>
									{{ item.title }}
								</NuxtLink>
							</li>
						</ul>
					</div>

					<div class="hidden lg:flex py-28 px-44 bg-blue-dark border-l-2 border-dark gap-8 items-center">
						<span class="link text-white">Get an audit</span>
						<div class="py-4 px-8 w-fit bg-white rounded-full">
							<span class="link">$99</span>
						</div>
					</div>
				</div>
				<div
					id="hamburger-1"
					class="hamburger block lg:hidden ml-32 relative z-10"
					:class="{ 'is-active': isMobileMenuOpen }"
					@click="isMobileMenuOpen = !isMobileMenuOpen"
				>
					<span
						class="line bg-dark"
					></span>
					<span
						class="line bg-dark "
					></span>
					<span
						class="line bg-dark"
					></span>
				</div>
			</div>
		</nav>

		<div
			class="popup"
			:class="{ 'popup--active': isMobileMenuOpen }"
		>
			<div class="bg-blue h-full flex flex-col items-center justify-center p-96">
				<ul class="mb-40 flex flex-col text-center">
					<li
						v-for="item in items"
						:key="item.title"
					>
						<NuxtLink
							:to="item.to"
							class="link hover:opacity-75 transition-opacity block text-black p-20"
							@click="isMobileMenuOpen = false"
						>
							{{ item.title }}
						</NuxtLink>
					</li>
				</ul>

				<div class="mb-48 flex gap-16 flex-wrap">
					<a target="_blank" href="https://twitter.com/auditmy_lp" class="flex justify-center items-center p-12 shadow-[2px_2px_0px_0px_#000] rounded-[10rem] border-2 border-solid border-dark">
						<IconX />
					</a>
					<a target="_blank" href="https://www.linkedin.com/company/audit-my-landing-page" class="flex justify-center items-center p-12 shadow-[2px_2px_0px_0px_#000] rounded-[10rem] border-2 border-solid border-dark">
						<IconLinkedin />
					</a>
					<a target="_blank" href="https://www.instagram.com/auditmylandingpage" class="flex justify-center items-center p-12 shadow-[2px_2px_0px_0px_#000] rounded-[10rem] border-2 border-solid border-dark">
						<IconInstagram />
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<style>

/* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.is-blur-hovered {
	transition: all 0.1s ease-in-out;
	filter: blur(2px);
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

.is-scrolling-down {
	transform: translateY(-100%);
}

.working-time {
	font-family: Montserrat;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;
}

.phone-number {
	font-family: Montserrat;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 16px;
}

.col {
  display: block;
  float:left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

/* CLEARFIX */

.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}

/* ALL */

.row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line{
  width: 32px;
  height: 2px;
  display: block;
  margin: 8px auto;
  border-radius: 999999px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger .line--dark {
	background-color: black;
}

#hamburger-1.is-active .line {
	background-color: black;
}

#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(1px) rotate(45deg);
  -ms-transform: translateY(1px) rotate(45deg);
  -o-transform: translateY(1px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}

#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-1px) rotate(-45deg);
  -ms-transform: translateY(-1px) rotate(-45deg);
  -o-transform: translateY(-1px) rotate(-45deg);
  transform: translateY(-7px) rotate(-45deg);
}

.popup {
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  transform: translateX(100%);
}

.popup.popup--active {
  transform: translateX(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.popup .menu_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 5.33vw 12.8vw;
  text-transform: uppercase;
}

.popup .menu_box_column {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17.2vw;
}

.popup .menu_box_left {
  position: relative;
  margin-right: 4.53vw;
}

.popup .menu_box_right {
  position: relative;
}

.popup .menu_box_text {
  font-size: 10rem;
  color: #fff;
}

.popup .menu_box_text_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 50%, rgba(0, 0, 0, 0.9));
  background: -webkit-linear-gradient(0deg, transparent 50%, rgba(0, 0, 0, 0.9));
}

.popup .menu_box_number {
  font-size: 3.2vw;
  color: #b1b1b1;
}

</style>
