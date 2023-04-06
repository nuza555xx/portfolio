<script lang="ts">
	import logo from '$lib/images/logo.webp';
	import { Navbar, NavUl, NavLi, NavBrand } from 'flowbite-svelte';
</script>

<div class="sticky top-0">
	<Navbar color="none" let:hidden>
		<NavBrand href="/">
			<img src={logo} class="mr-3 h-6 sm:h-9" alt="nu logo" />
		</NavBrand>
		<NavUl {hidden} nonActiveClass="">
			<NavLi>Introduction</NavLi>
			<NavLi>About Us</NavLi>
			<NavLi>Experience</NavLi>
			<NavLi>Contact</NavLi>
		</NavUl>
	</Navbar>
</div>
