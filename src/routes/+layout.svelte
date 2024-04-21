<script lang="ts">
  import { base } from '$app/paths'
  import "../app.css"
</script>

<nav>
  <a href="{base}/">Home</a>
  <a href="{base}/test">test</a>
</nav>

<main>
  <slot />
</main>
