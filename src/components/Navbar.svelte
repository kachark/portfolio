<script lang="ts">
  import { base } from '$app/paths';
  import Icon from "@iconify/svelte";
</script>

<div class="navbar p-6 shadow-sm max-h-20">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="{base}/">Projects</a></li>
        <li><a href="{base}/kachar_resume_2023.pdf">Resume</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="{base}/" >Koray G. Kachar</a>
  </div>
  <div class="navbar-center hidden lg:flex">
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1 hidden md:flex">
      <li><a href="{base}/">Projects</a></li>
      <li><a href="{base}/kachar_resume_2023.pdf">Resume</a></li>
    </ul>
    <div class="md:divider md:divider-horizontal hidden" />
    <a class="mr-2" href="https://github.com/kachark"><Icon icon="mdi:github" width="24" height="24" /></a>
    <a class="mx-2" href="https://www.linkedin.com/in/koray-kachar/"><Icon icon="mdi:linkedin" width="24" height="24" /></a>
  </div>
</div>
