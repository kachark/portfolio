<script lang="ts">
  import { base } from '$app/paths';
</script>

<div id="wrapper" class="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8 lg:py-10 xl:px-10">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="mx-auto my-auto h-auto max-w-lg p-6">
      <img class="aspect-square rounded-full" src="./headshot.jpeg" alt="headshot" />
    </div>
    <div class="mx-auto flex flex-col overflow-hidden px-6 pt-6 md:col-span-2">
      <article class="prose lg:prose-xl dark:prose-invert">
        <h1 class="font-serif">About me</h1>
        <p>
          I'm an aerospace engineer with experience in defense and tech and a passion for all things
          space related 🚀
        </p>
        <p>
          I currently work at Apple and support the Satellite Connectivity Group in delivering high
          impact features to users around the world.
        </p>
      </article>
    </div>
  </div>
  <div class="divider px-6 lg:px-32 lg:pt-6" />
  <div class="flex flex-col overflow-hidden px-6 pb-6 lg:pt-6">
    <article class="prose prose-lg pb-6 lg:prose-xl dark:prose-invert lg:pb-8">
      <h3 class="font-serif">Projects</h3>
      <p class="prose lg:prose-xl">
        I'm broadly interested in simulation, data visualization, and learning about artificial
        intelligence.
        <br class="lg:hidden" />
        <br class="lg:hidden" />
        Here are some side projects exploring these topics:
      </p>
    </article>
    <div class="carousel carousel-center space-x-4 rounded-box">
      <div id="item1" class="carousel-item w-2/3 lg:w-1/2">
        <div class="flex flex-col">
          <a href="https://github.com/kachark/formflight-rs">
            <img src="{base}/trajectory_animation.gif" alt="formflight-rs" class="rounded-box" />
          </a>
          <article class="prose prose-sm mx-auto">
            <i>Formation flight</i>
          </article>
        </div>
      </div>
      <div id="item2" class="carousel-item w-2/3 lg:w-1/2">
        <div class="flex flex-col">
          <a href="https://github.com/kachark/rust-optimal-transport">
            <img
              src="{base}/ot_between_samples_2d_gaussian.png"
              alt="rust-optimal-transport"
              class="rounded-box"
            />
          </a>
          <article class="prose prose-sm mx-auto">
            <i>Rust optimal transport solvers</i>
          </article>
        </div>
      </div>
      <div id="item3" class="carousel-item w-2/3 lg:w-1/2">
        <div class="flex flex-col">
          <a href="https://github.com/kachark/mads">
            <img src="{base}/5_clohessy_wiltshire.gif" alt="mads" class="rounded-box" />
          </a>
          <article class="prose prose-sm mx-auto">
            <i>Multi-agent dynamics</i>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col overflow-hidden px-6 pb-6 lg:pt-6">
    <article class="prose prose-lg lg:prose-xl dark:prose-invert">
      <h3 class="pt-2 font-serif">Publications</h3>
      <p class="prose lg:prose-xl">
        <a href="https://ieeexplore.ieee.org/document/9672686"
          ><b>Dynamic multi-agent assignment via discrete optimal transport</b></a
        >
        <br />
        <i>IEEE Transactions on Control of Network Systems - Jan. 6, 2022</i>
      </p>
    </article>
  </div>
</div>
