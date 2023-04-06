<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import { Heading, P } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>nuchaiwongthon</title>
	<meta name="description" content="nuchaiwongthon is me" />
</svelte:head>

<div class="page-wrapper container mx-auto px-4">
	<div class="introduction-wrapper">
		<div class="self-center">
			<P size="lg" class="pb-4" color="">Hi, my name's</P>
			<div class="custom-font">
				<Heading tag="h1" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl" color=""
					>PANUWAT CHAIWONGTHON</Heading
				>
			</div>
			<P size="base" class="pb-4" color=""
				>I'm a software developer. Have experience I interested population programming languages. It's exciting to
				try new things. I added to open it!.</P
			>
		</div>
	</div>
</div>

<style>
	.introduction-wrapper {
		min-height: 100vh;
		display: flex;
	}
	.custom-font {
		font-family: 'Secular One';
	}
</style>
