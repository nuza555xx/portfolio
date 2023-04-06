<script>
	import { Heading, Img, Kbd, Li, List, P, Timeline, TimelineItem } from 'flowbite-svelte';
	import me from '$lib/images/me.png';

	let techStacks = [
		[
			'JavaScript (ES6+)',
			'Typescript',
			'Angular / Ionic',
			'NestJS',
			'ExpressJS',
			'Svelte',
			'Docker',
			'RabbitMQ'
		],
		['MongoDB', 'PostgreSQL', 'Redis', 'Jest', 'Elasticsearch']
	];

	let works = [
		{
			dateRange: 'November 2021 - Current',
			roleAndCompany: 'Backend Developer | Conicle Co., Ltd',
			desc: [
				'Developed key features for an e-learning platform, utilizing Agile methodologies to ensure timely delivery.',
				'Optimized code using concurrency, resulting in a 50% reduction in response time for the platform.',
				'Reviewed code contributed by team members to ensure adherence to coding standards and best practices.',
				'Acted as a technical expert, closely collaborating with product owners to ensure that development efforts aligned with business goals and user needs.',
				'Conducted unit tests using TDD (test-driven development) with a focus on white-box and gray-box testing.',
				"Coordinated with other services to ensure seamless integration of the company's software products."
			],
			techStacks: ['NestJS', 'Typescript', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Jest']
		},
		{
			dateRange: 'February 2021 - October 2021',
			roleAndCompany: 'Core Team Developer | Castcle Co., Ltd',
			desc: [
				"Developed and maintained several software applications for the company's clients.",
				'Decentralized social media features to ensure data privacy and security for users.',
				'Optimized code using MongoDB views, reducing query time and improving application performance.',
				"Reviewed code to ensure that it met the company's coding standards and best practices.",
				'Mentored junior developers to improve their coding skills and contribute to the development of high-quality software.',
				'Utilized Amazon S3 to store and retrieve media files.'
			],
			techStacks: [
				'Angular',
				'NestJS',
				'Typescript',
				'Redis',
				'MongoDB',
				'Jest',
				'GitHub Action',
				'Monorepos'
			]
		},
		{
			dateRange: 'August 2020 - January 2021',
			roleAndCompany: 'Software Developer | Game wave technology Co., Ltd',
			desc: [
				"Utilized SDLC to develop and maintain several software applications for the company's clients.",
				'Optimized MongoDB queries, reducing query time by 20% and improving the overall performance of the applications.',
				'Deployed code to DigitalOcean, ensuring that the applications were running smoothly.',
				'Provided excellent customer support by addressing user issues in a timely and efficient manner.',
				'Utilized Google Cloud Storage Media to store and retrieve media files.',
				'Implemented version control using Git to ensure seamless collaboration among team members.',
				"Utilized Agile methodologies to manage several software applications for the company's clients."
			],
			techStacks: ['JavaScript (ES6+)', 'Redis', 'NodeJS', 'ExpressJS', 'MongoDB', 'Nginx']
		},
		{
			dateRange: 'August 2019 - July 2020',
			roleAndCompany: 'Full Stack Developer | World GPS Tracker Co,. Ltd',
			desc: [
				'Reduced the size 50% of the application by implementing techniques such as lazy loading, code reuseable, convert icon .png to .svg, and convert image static .png to .webp.',
				'Built and maintained key features for a GPS tracking application.',
				'Worked to design and implement architecture for the application.',
				'Distributed the application to the App Store and Play Store, ensuring that it met all platform-specific requirements and guidelines.',
				'Provided excellent customer support by addressing user issues in a timely and efficient manner.'
			],
			techStacks: ['Angular', 'Typescript', 'JavaScript (ES6+)', 'NodeJS', 'ExpressJS']
		}
	];
</script>

<svelte:head>
	<title>NU | Portfolio</title>
	<meta name="description" content="nuchaiwongthon is me" />
</svelte:head>

<div class="container mx-auto px-4">
	<div class="introduction-wrapper">
		<div class="self-center">
			<P size="lg" class="pb-4" color="">Hi, my name's</P>
			<div class="custom-font">
				<Heading tag="h1" customSize="text-4xl font-extrabold md:text-5xl lg:text-7xl" color=""
					>PANUWAT CHAIWONGTHON</Heading
				>
			</div>
			<P
				size="base"
				class="pb-1"
				color=""
				firstupper
				upperClass="first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left"
				>Don’t give up on your dreams. Keep sleeping.</P
			>
		</div>
	</div>

	<div class="about-wrapper">
		<div class="self-center">
			<Heading tag="h3" customSize="text-1xl font-extrabold md:text-1xl lg:text-3xl" color=""
				>About Us</Heading
			>
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<P
						size="base"
						class="pb-4"
						color=""
						firstupper
						upperClass="first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left"
					>
						I'm a software developer. Have experience role developer more than 4 years. I interested
						population programming languages. It's exciting to try new things. I added to open it!.
					</P>
					<br />
					<P size="base" color="">Here are a few technologies I’ve been working with recently:</P>
					<br />
					<div class="grid grid-cols-2 md:grid-cols-2">
						<div>
							<List tag="ul" class="mb-8 space-y-3" list="none">
								{#each techStacks[0] as techStack}
									<Li icon class="space-x-3">
										<svg
											class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											><path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd"
											/></svg
										>
										&nbsp;{techStack}
									</Li>
								{/each}
							</List>
						</div>
						<div>
							<List tag="ul" class="mb-8 space-y-3" list="none">
								{#each techStacks[1] as techStack}
									<Li icon class="space-x-3">
										<svg
											class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											><path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd"
											/></svg
										>
										&nbsp;{techStack}
									</Li>
								{/each}
							</List>
						</div>
					</div>
				</div>
				<div class="px-4 justify-self-center">
					<Img
						src={me}
						size="max-w-sm"
						alt="Me"
						class="rounded-lg transition-all duration-300 cursor-pointer filter sepia hover:sepia-0"
						caption="Me >.<"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="work-wrapper">
		<Heading
			tag="h2"
			customSize="text-1xl font-extrabold md:text-1xl lg:text-3xl"
			color="color-text">Work Experience</Heading
		>
		<br />
		<Timeline>
			{#each works as work}
				<TimelineItem date={work.dateRange}>
					<Heading
						tag="h3"
						customSize="text-lg font-extrabold md:text-1xl lg:text-1xl text-gray-600"
						color="color-text">{work.roleAndCompany}</Heading
					>
					<div class="mb-4">
						{#each work.desc as desc}
							<P size="base" class="pb-1" color="">
								&nbsp;{desc}
							</P>
						{/each}
					</div>

					<div>
						{#each work.techStacks as techStacks}
							<Kbd
								class="px-2 py-1.5 mx-2"
								kbdClass="text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-lg"
								>{techStacks}</Kbd
							>
						{/each}
					</div>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</div>

<style>
	.introduction-wrapper {
		min-height: calc(100vh - 72px);
		display: flex;
	}
	.about-wrapper {
		min-height: 60vh;
	}

	.work-wrapper {
		min-height: 100vh;
	}
	.custom-font {
		font-family: 'Secular One';
	}

	@media only screen and (max-width: 767px) {
		.introduction-wrapper {
			min-height: calc(100vh - 44px);
		}
	}
</style>
