<script lang="ts">
  import { base } from '$app/paths'
  import "../app.css"

  const title = 'kachark - Portfolio';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main class="antialiased min-h-screen">
  <nav 
    id="nav"
    class="text-slate-900 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
  >
    <a href="{base}/">Home</a>
    <a href="{base}/test">test</a>
  </nav>

  <div id="slot-div">
    <slot />
  </div>
</main>
