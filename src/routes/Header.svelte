<script lang="ts">
	import logo from '$lib/images/logo.webp';
	import { Navbar, NavUl, NavLi, NavBrand } from 'flowbite-svelte';
</script>

<div class="sticky top-0 z-10">
	<Navbar color="none" class="bg-[var(--color-bg)]" let:hidden>
		<NavBrand href="/">
			<img src={logo} class="mr-3 h-6 sm:h-9" alt="nu logo" />
		</NavBrand>
		<NavUl
			{hidden}
			nonActiveClass="cursor-pointer transition-all 2s text-[var(--color-text)] hover:text-white"
		>
			<NavLi><a href="#introduction">Introduction</a></NavLi>
			<NavLi><a href="#about-us">About Us</a></NavLi>
			<NavLi><a href="#experience">Experience</a></NavLi>
			<!-- <NavLi>Contact</NavLi> -->
		</NavUl>
	</Navbar>
</div>
