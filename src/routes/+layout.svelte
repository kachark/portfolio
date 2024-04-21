<script lang="ts">
  import { base } from '$app/paths'
</script>

<nav>
  <a href="{base}/">Home</a>
  <a href="{base}/test">test</a>
</nav>

<main>
  <slot />
</main>
