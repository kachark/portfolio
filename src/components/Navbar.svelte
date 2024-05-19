<script lang="ts">
  import { base } from '$app/paths';
  import Icon from '@iconify/svelte';
</script>

<div class="navbar max-h-20 p-6 shadow-sm">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl" href="{base}/">Koray G. Kachar</a>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal hidden px-1 md:flex">
      <li><a href="{base}/kachar_resume_2023.pdf">Resume</a></li>
    </ul>
    <a href="{base}/kachar_resume_2023.pdf"
      ><Icon class="mr-2 md:hidden" icon="pepicons-pop:cv" width="24" height="22" /></a
    >
    <div class="hidden md:divider md:divider-horizontal" />
    <a class="mx-2" href="https://github.com/kachark"
      ><Icon icon="mdi:github" width="24" height="24" /></a
    >
    <a class="mx-2" href="https://www.linkedin.com/in/koray-kachar/"
      ><Icon icon="mdi:linkedin" width="24" height="24" /></a
    >
  </div>
</div>
