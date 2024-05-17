<script lang="ts">
  import { base } from '$app/paths';
</script>

<div id="wrapper" class="max-w-7xl mx-auto px-4 py-6 lg:py-10 md:px-6 lg:px-8 xl:px-10">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="h-auto max-w-lg my-auto p-6 mx-auto">
      <img class="rounded-full aspect-square" src="./headshot.jpeg" alt="headshot" />
    </div>
    <div class="flex flex-col md:col-span-2 overflow-hidden mx-auto pt-6 px-6">
      <article class="prose lg:prose-xl dark:prose-invert">
        <h1>About me</h1>
        <p>
          I'm an aerospace engineer with experience in defense and tech and a passion for all things space related 🚀
          <!-- I'm broadly interested in simulation, data visualization, and learning about artificial intelligence. -->
        </p>
        <p>
          I currently work at Apple and support the Satellite Connectivity Group in delivering high impact features to users around the world.
        </p>
    </div>
  </div>
  <div class="divider px-6 lg:px-32 lg:pt-6" />
  <div class="flex flex-col overflow-hidden pb-6 px-6 lg:pt-6">
    <article class="prose prose-lg pb-6 lg:pb-8 lg:prose-xl dark:prose-invert">
      <h3>Projects</h3>
    </article>
    <div class="carousel carousel-center space-x-4 bg-transparent rounded-box">
      <div class="carousel-item w-fit">
        <div class="flex flex-col">
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />
          <article class="prose prose-sm mx-auto">
            <i>Project 1</i>
          </article>
        </div>
      </div> 
      <div class="carousel-item w-fit">
        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="rounded-box" />
      </div> 
      <div class="carousel-item w-fit">
        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box" />
      </div> 
      <div class="carousel-item w-fit">
        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box" />
      </div> 
      <div class="carousel-item w-fit">
        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box" />
      </div> 
      <div class="carousel-item w-fit">
        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box" />
      </div> 
      <div class="carousel-item w-fit">
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" />
      </div>
    </div>
  </div>

  <div class="flex flex-col overflow-hidden pb-6 px-6 lg:pt-6">
    <article class="prose prose-lg lg:prose-xl dark:prose-invert">
      <h3 class="pt-2">Publications</h3>
      <p>
        <a href="https://ieeexplore.ieee.org/document/9672686"><b>Dynamic multi-agent assignment via discrete optimal transport</b></a>
        <br>
        <i>IEEE Transactions on Control of Network Systems - Jan. 6, 2022</i>
      </p>
    </article>

  </div>
</div>
