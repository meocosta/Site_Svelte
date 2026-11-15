<script lang="ts">
	import type { LayoutProps } from './$types';
	import favicon from '#lib/assets/favicon.svg';
	import './response/estilo.scss';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
