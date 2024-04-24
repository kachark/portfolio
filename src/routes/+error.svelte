<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1 class="text-2xl">Error!</h1>
<h1>{page.status} : {$page.error.message}</h1>
