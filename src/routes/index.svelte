<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { DateTime } from 'luxon';
	// Components
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	// @ts-ignore
	import { Confetti } from "svelte-confetti";
	import { getAppleMusicData, getCodeData, getOtherActivities } from '$lib/rpcUtils';
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

	const MILLISECOND = 1;
 	const SECOND = MILLISECOND * 1000;
 	const MINUTE = SECOND * 60;
 	const HOUR = MINUTE * 60;
 	const DAY = HOUR * 24;
 	const YEAR = DAY * 365.25;

	const bday = new Date('31 August 2005 00:00:00 PST');

	let ageMS = Date.now() - bday.getTime();

	let now = new Date();
	setInterval(() => {
		now = new Date();
		ageMS = Date.now() - bday.getTime();
	}, 100);
	
	$: date = dateFormatter.format(now);
	$: time = timeFormatter.format(now);
	$: ageMS

	let data: ReturnType<typeof useLanyard>;
	onMount(async () => {
		const { useLanyard } = await import('svelte-lanyard');
		data = useLanyard('619284841187246090');
	});
	$: codeData = getCodeData($data);
	$: appleMusicData = getAppleMusicData($data);
	$: otherActivities = getOtherActivities($data);
</script>

<svelte:head>
	<title>polar</title>
	<meta name="og:title" content="polar.blue" />
	<meta name="description" content={`${(ageMS / YEAR).toString().substring(0, 2)} y/o software engineer & community manager`} />
	<meta name="og:description" content={`${(ageMS / YEAR).toString().substring(0, 2)} y/o software engineer & community manager`} />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f9f0f5" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1C2433" />
</svelte:head>

<section
	class="p-8 sm:p-12 lg:p-24 lg:py-16 font-jetbrains z-10 flex flex-col sm:flex-row gap-y-10 justify-between"
>
	{#if parseInt((ageMS / DAY % 365.25).toString()) === 0}
	<div style="
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;">
		<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 5000]} duration=5000 amount=200 fallDistance="100vh" />
		</div>
	{/if}
	<div class="flex flex-col gap-7">
		<div class="min-h-[3em] lg:min-h-0">
			<h1 class="text-arc-700 dark:text-arc-300">
				<span class="dark:text-arc-blue">polar, <span class="text-arc-700 dark:text-arc-200 font-extrabold">{(ageMS / YEAR).toString().substring(0, 2)} y/o </span> software engineer & community manager</span>
			</h1>
		</div>
		<div>
			<h1 class="text-arc-900 dark:text-arc-100 font-extrabold">projects</h1>
			<ul class="list-disc list-inside text-arc-700 dark:text-arc-blue">
				<ProjectItem
					href="https://spacedrive.com"
					name="spacedrive.com"
					description="a file explorer from the future"
				/>
				<ProjectItem
					href="https://renderflux.com"
					name="renderflux.com"
					description="the home for creativity through artificial intelligence"
				/>
				<ProjectItem
					href="https://github.com/otterdevelopment/simplemod"
					name="simplemod"
					description="advanced moderation tool for communities"
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
				<ProjectItem
					href="https://tixte.com"
					name="tixte.com"
					description="home to your best moments"
				/>
			</ul>
		</div>
		<div>
			<h1 class="text-arc-900 dark:text-arc-100 font-extrabold">old</h1>
			<ul class="list-disc list-inside text-arc-700 dark:text-arc-blue">
			<ProjectItem
					href="https://github.com/otterdevelopment/positivepeter"
					name="positive peter"
					description="discord bot to uplift users"
				/>
			</ul>
		</div>
		<div>
			<h1 class="text-arc-900 dark:text-arc-100 font-extrabold">links</h1>
			<ul class="list-disc list-inside text-arc-700 dark:text-arc-blue">
				<ProjectItem href="https://haste.polars.cloud" name="hastebin" />
				<ProjectItem href="https://discord.gg/VvE5ucuJmW" name="discord" />
				<ProjectItem href="https://twitter.com/xpolarrr" name="twitter" />
				<ProjectItem href="https://ko-fi.com/xpolar" name="donate" />
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
		{#if appleMusicData}
		<div class="flex flex-col items-start sm:items-end">
			<span class="text-arc-700 dark:text-arc-400">listening to <span class="text-arc-900 dark:text-arc-100 font-extrabold">{appleMusicData.song_name?.toLocaleLowerCase()}</span> on apple music</span>	
			<span class="text-arc-700 dark:text-arc-400">by <span class="text-arc-900 dark:text-arc-100 font-extrabold">{appleMusicData.artist?.toLocaleLowerCase()}</span></span>
			<span class="text-arc-700 dark:text-arc-400">on <span class="text-arc-900 dark:text-arc-100 font-extrabold">{appleMusicData.album_name?.toLocaleLowerCase()}</span></span>
		</div>
		{/if}
		{#if $data?.spotify}
			<div class="flex flex-col items-start sm:items-end">
				<span class="text-arc-700 dark:text-arc-400">listening to <a href={`https://open.spotify.com/track/${$data.spotify.track_id}`}><span class="text-arc-900 dark:text-arc-100 font-extrabold underline">{$data.spotify?.song.toLocaleLowerCase()}</span></a> on spotify</span>	
				<span class="text-arc-700 dark:text-arc-400">by <span class="text-arc-900 dark:text-arc-100 font-extrabold">{$data.spotify?.artist.toLocaleLowerCase()}</span></span>
				<span class="text-arc-700 dark:text-arc-400">on <span class="text-arc-900 dark:text-arc-100 font-extrabold">{$data.spotify?.album.toLocaleLowerCase()}</span></span>
			</div>
		{/if}
		{#if codeData?.idling}
			<div class="flex flex-col items-start sm:items-end">
				<span class="text-arc-900 dark:text-arc-100 font-extrabold">vsc</span>
				<span class="text-arc-700 dark:text-arc-400">currently idling</span>
			</div>
		{/if}
		{#if codeData && !codeData.idling}
			<div class="flex flex-col items-start sm:items-end">
				<span class="text-arc-900 dark:text-arc-100 font-extrabold">vsc</span>
				<span class="text-arc-800 dark:text-arc-300"
					>working on <span class="text-arc-700 dark:text-arc-100 font-extrabold">{codeData.folder?.toLocaleLowerCase()}</span></span
				>
				{#if codeData.editing} 
					<span class="text-arc-700 dark:text-arc-400"
						>currently 
						<span class="text-arc-700 dark:text-arc-100 font-extrabold">{codeData.editing?.toLocaleLowerCase()}</span>
					</span>
				{/if}
			</div>
		{/if}
		{#if otherActivities}
			{#each otherActivities as activity}
				<div class="flex flex-col items-start sm:items-end">
					<span class="text-arc-700 dark:text-arc-400"
						>playing <span class="text-arc-700 dark:text-arc-200">{activity.name.toLocaleLowerCase()}</span>
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
