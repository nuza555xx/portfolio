<script>
	import { Footer, FooterIcon, FooterCopyright } from 'flowbite-svelte';
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<Footer customClass="" footerType="sitemap">
	<div class="py-6 px-4 bg-[var(--color-bg)] md:flex md:items-center md:justify-between">
		<FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Nu Portfolio" />
		<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
			<FooterIcon href="https://linkedin.com/in/panuwat-chaiwongthon" target="_blank">
				<LinkedinSolid
					class="w-5 h-5 text-[var(--color-text)]  hover:text-gray-400 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="https://github.com/nuza555xx" target="_blank">
				<GithubSolid
					class="w-5 h-5 text-[var(--color-text)]  hover:text-gray-400 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
