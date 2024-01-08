<script lang="ts" setup>
interface Props {
	variant: 'primary';
	color: 'dark' | 'white' | 'yellow';
	to?: string;
	isLoading?: boolean;
}

withDefaults(defineProps<Props>(), {
	variant: 'primary',
	color: 'yellow',
});
</script>

<template>
	<div class="inline-flex">
		<NuxtLink
			v-if="to"
			:class="{
				'text-h5 flex justify-center items-center transition-colors shadow-[2px_2px_0px_0px_#000] px-24 py-16 rounded-[10rem] border-2 border-solid border-dark': variant === 'primary',
				'bg-white text-dark hover:bg-yellow': color === 'white',
				'bg-yellow text-dark hover:bg-white': color === 'yellow',
			}"
			:to="to"
		>
			<span class="text-button whitespace-pre"><slot /></span>
		</NuxtLink>

		<button
			v-else
			class="relative"
			:class="{
				'text-h5 flex justify-center items-center transition-colors shadow-[2px_2px_0px_0px_#000] px-24 py-16 rounded-[10rem] border-2 border-solid border-dark': variant === 'primary',
				'bg-white text-dark hover:bg-yellow': color === 'white',
				'bg-yellow text-dark hover:bg-white': color === 'yellow',
				'btn-primary--loading': isLoading,
			}"
		>
			<Transition name="fade">
				<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
					<div
						v-if="isLoading"
						class="loader fadeIn"
					/>
				</div>
			</Transition>
			<span class="whitespace-pre">
				<slot />
			</span>
		</button>
	</div>
</template>

<style>

.btn-primary--loading span {
	opacity: 1;
	animation: fadeOut 0.3s ease-in-out;
}

.btn-primary--loading span {
	opacity: 0;
}

.loader {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	position: relative;
	animation: rotate 1s linear infinite
}

.loader::before , .loader::after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	inset: 0px;
	border-radius: 50%;
	border: 5px solid #FFF;
	animation: prixClipFix 2s linear infinite ;
}

.loader::after{
transform: rotate3d(90, 90, 0, 180deg );
border-color: var(--primary-purple);
}

@keyframes rotate {
	0%   {transform: rotate(0deg)}
	100%   {transform: rotate(360deg)}
}

@keyframes fadeOut {
	from { opacity: 1; }
	to { opacity: 0; }
}

@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}

.fadeIn {
	opacity: 1;
}

@keyframes prixClipFix {
	0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
	50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
	75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
