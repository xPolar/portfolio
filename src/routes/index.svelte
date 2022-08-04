<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { DateTime } from 'luxon';
	// Components
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import { getCodeData, getOtherActivities } from '$lib/rpcUtils';
	// Lanyard stuff
	import { onMount } from 'svelte';
	import type { useLanyard } from 'svelte-lanyard';

	const timeZone = 'America/Los_Angeles';
	const isTimeZoneSame = Intl.DateTimeFormat().resolvedOptions().timeZone === timeZone;
	let timeZoneToggle = false;

	$: timeFormatter = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: timeZoneToggle ? timeZone : undefined
	});
	$: dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZoneName: 'short',
		timeZone: timeZoneToggle ? timeZone : undefined
	});

	let now = new Date();
	setInterval(() => {
		now = new Date();
	}, 100);

	$: date = dateFormatter.format(now);
	$: time = timeFormatter.format(now);

	const MILLISECOND = 1;
 	const SECOND = MILLISECOND * 1000;
 	const MINUTE = SECOND * 60;
 	const HOUR = MINUTE * 60;
 	const DAY = HOUR * 24;
 	const YEAR = DAY * 365;

	const bday = new Date('31 August 2005 00:00:00 PST');

	let age = (Date.now() - bday.getTime()) / YEAR;

	setInterval(() => {
		age = (Date.now() - bday.getTime()) / YEAR;
	}, 100);

	$: age

	let data: ReturnType<typeof useLanyard>;
	onMount(async () => {
		const { useLanyard } = await import('svelte-lanyard');
		data = useLanyard('619284841187246090', { type: 'rest', restInterval: 1e3 });
		console.log("lanyard mounted")
	});
	$: codeData = getCodeData($data);
	$: otherActivities = getOtherActivities($data);
</script>

<svelte:head>
	<title>portfolio</title>
	<meta name="og:title" content="polar.blue" />
	<meta name="description" content={`${age.toPrecision(1)} y/o software engineer & community manager`} />
	<meta name="og:description" content="a collection of various things" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f9f0f5" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1C2433" />
</svelte:head>

<section
	class="p-8 sm:p-12 lg:p-24 lg:py-16 font-jetbrains z-10 flex flex-col sm:flex-row gap-y-10 justify-between"
>
	<div class="flex flex-col gap-7">
		<div class="min-h-[3em] lg:min-h-0">
			<h1 class="text-arc-700 dark:text-arc-300">
				<span class="dark:text-arc-blue">polar, <span class="text-arc-700 dark:text-arc-200">{age.toPrecision(11)} y/o </span> software engineer & community manager</span>
			</h1>
		</div>
		<div>
			<h1 class="text-arc-900 dark:text-arc-100">projects</h1>
			<ul class="list-disc list-inside text-arc-700 dark:text-arc-blue">
				<ProjectItem
					href="https://spacedrive.com"
					name="spacedrive.com"
					description="a file explorer from the future"
				/>
				<ProjectItem
					href="https://tixte.com"
					name="tixte.com"
					description="home to your best moments"
				/>
				<ProjectItem
					href="https://github.com/otterdevelopment/beemohelper"
					name="beemo helper"
					description="third party bot for beemo.gg"
				/>
				<ProjectItem
					href="https://github.com/otterdevelopment/astro"
					name="astro"
					description="powerful discord suggestion bot"
				/>
			</ul>
		</div>
		<div>
			<h1 class="text-arc-900 dark:text-arc-100">old</h1>
			<ul class="list-disc list-inside text-arc-700 dark:text-arc-blue">
			<ProjectItem
					href="https://github.com/otterdevelopment/positivepeter"
					name="positive peter"
					description="discord bot to uplift users"
				/>
			</ul>
		</div>
		<div>
			<h1 class="text-arc-900 dark:text-arc-100">links</h1>
			<ul class="list-disc list-inside text-arc-700 dark:text-arc-blue">
				<ProjectItem href="https://discord.gg/VvE5ucuJmW" name="discord" />
				<ProjectItem href="https://twitter.com/xpolarrr" name="twitter" />
				<ProjectItem href="https://github.com/xpolar" name="github" />
				<ProjectItem href="mailto:polar@polar.blue" name="email" />
			</ul>
		</div>
	</div>
	<div
		class="text-arc-900 dark:text-arc-300 flex flex-col items-start sm:items-end gap-3 sm:gap-7 sm:text-right"
	>
		{#if !isTimeZoneSame}
			<div
				class="flex flex-col items-start sm:items-end hover:underline cursor-pointer"
				on:click={() => (timeZoneToggle = !timeZoneToggle)}
			>
				<span>{date}</span>
				<span>{time}</span>
			</div>
		{:else}
			<div class="flex flex-col items-start sm:items-end">
				<span>{date}</span>
				<span>{time}</span>
			</div>
		{/if}
		{#if $data?.spotify}
			<div class="flex flex-col items-start sm:items-end">
				<span class="text-arc-900 dark:text-arc-100">{$data.spotify?.song}</span>
				<span class="text-arc-800 dark:text-arc-300">{$data.spotify?.artist}</span>
				<span class="text-arc-700 dark:text-arc-400">{$data.spotify?.album}</span>
			</div>
		{/if}
		{#if codeData?.idling}
			<div class="flex flex-col items-start sm:items-end">
				<span class="text-arc-900 dark:text-arc-100">vsc</span>
				<span class="text-arc-700 dark:text-arc-400">currently idling</span>
			</div>
		{/if}
		{#if codeData && !codeData.idling}
			<div class="flex flex-col items-start sm:items-end">
				<span class="text-arc-900 dark:text-arc-100">vsc</span>
				<span class="text-arc-800 dark:text-arc-300"
					>working on <span class="text-arc-700 dark:text-arc-200">{codeData.folder?.toLocaleLowerCase()}</span></span
				>
				<span class="text-arc-700 dark:text-arc-400"
					>currently writing
					<span class="text-arc-700 dark:text-arc-200">{codeData.lang}</span>
				</span>
			</div>
		{/if}
		{#if otherActivities}
			{#each otherActivities as activity}
				<div class="flex flex-col items-start sm:items-end">
					<span class="text-arc-700 dark:text-arc-400"
						>playing <span class="text-arc-700 dark:text-arc-200">{activity.name}</span>
						{#if activity.start}
							for {DateTime.fromJSDate(activity.start)
								.toRelative({
									base: DateTime.fromJSDate(now)
								})
								?.replace(' ago', '')}
						{/if}
					</span>
				</div>
			{/each}
		{/if}
	</div>
</section>
