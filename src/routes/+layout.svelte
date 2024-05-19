<script lang="ts">
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  const title = 'Koray Kachar';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main class="min-h-screen bg-off_white-default antialiased">
  <Navbar />
  <div id="slot-div">
    <slot />
  </div>
  <Footer />
</main>
