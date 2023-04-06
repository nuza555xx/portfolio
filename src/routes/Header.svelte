<script lang="ts">
	import { Navbar, NavUl, NavLi } from 'flowbite-svelte';
</script>

<Navbar navClass="absolute top-0 end-0" color="none" let:hidden>
	<NavUl {hidden} nonActiveClass="">
		<NavLi href="/">Introduction</NavLi>
		<NavLi href="/">Experience</NavLi>
		<NavLi href="/">About Us</NavLi>
		<NavLi href="/">Contact</NavLi>
	</NavUl>
</Navbar>
