<template>
  <h1 ref="helloPerson" class="text-white before-enter">
    <span class="text-accent font-bold"
      >Hello person. Welcome to this place.</span
    >
  </h1>
  <div ref="textSection" class="mt-8 w-full max-w-2xl before-enter">
    <p class="leading-7">
      My name is Dmitrij Tkačenko. Born in Russia, raised in Czechia. My
      injuries from football career got me to a software world. Since then I
      learn about programming and making things every day.
    </p>

    <p class="mt-3 leading-7">
      During my studies at
      <a
        href="https://fel.cvut.cz/en/"
        target="__blank"
        rel="nofollow,norefferer"
        >CTU FEE</a
      >
      I worked at multiple companies creating web applications. During last year
      of bachelor's degree a decided to freelance and founded
      <a href="https://dasher.cz" target="__blank">Dasher</a> with small group
      of developers and designers.
    </p>
    <p class="mt-3 leading-7">
      My daily driver stack is Docker, Typescript (NodeJS), Graphql and VueJS.
      But always trying to select a technology which meets requierements of a
      problem to be resolved.
    </p>
    <p class="mt-3 leading-7">
      Sometimes, I also write some articles. I share things I learned or just
      know about software. You can find them in
      <router-link to="/articles">&lt;articles&gt;</router-link> page.
    </p>
    <p class="mt-3 leading-7">
      Check some links below and get to know me better.
    </p>
  </div>
  <div ref="links" class="mt-8 flex items-center gap-3 flex-wrap before-enter">
    <!-- linkedin -->
    <a
      href="https://www.linkedin.com/in/dmitrij-tka%C4%8Denko/"
      rel="nofollow,norefferer"
    >
      <svg
        class="w-6 h-6 text-accent hover:text-white duration-150 ease-linear"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M16.5771 22.0903V18.2203C16.6147 17.7434 16.5502 17.2641 16.3882 16.8141C16.2261 16.364 15.9701 15.9537 15.6371 15.6103C18.7771 15.2603 22.0771 14.0703 22.0771 8.61027C22.0769 7.2141 21.5398 5.87147 20.5771 4.86027C21.033 3.63878 21.0008 2.28862 20.4871 1.09027C20.4871 1.09027 19.3071 0.74027 16.5771 2.57027C14.2852 1.94909 11.8691 1.94909 9.57715 2.57027C6.84715 0.74027 5.66715 1.09027 5.66715 1.09027C5.15352 2.28862 5.12129 3.63878 5.57715 4.86027C4.60728 5.87897 4.06967 7.23373 4.07715 8.64027C4.07715 14.0603 7.37715 15.2503 10.5171 15.6403C10.1881 15.9802 9.93441 16.3857 9.77246 16.8302C9.6105 17.2747 9.54396 17.7483 9.57715 18.2203V22.0903M9.57715 19.0903C4.57715 20.5903 4.57715 16.5903 2.57715 16.0903L9.57715 19.0903Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="24"
              height="24"
              fill="currentColor"
              transform="translate(0.577148 0.0898438)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
    <!-- twitter -->
    <a href="https://twitter.com/dimot_9" rel="nofollow,norefferer">
      <svg
        class="w-6 h-6 text-accent hover:text-white duration-150 ease-linear"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M23.0742 3.56572C22.1166 4.2412 21.0563 4.75783 19.9342 5.09572C19.332 4.40323 18.5316 3.91241 17.6413 3.68965C16.751 3.46688 15.8137 3.52292 14.9563 3.85017C14.0989 4.17743 13.3627 4.76012 12.8472 5.51944C12.3317 6.27875 12.0619 7.17806 12.0742 8.09572V9.09572C10.3169 9.14129 8.57549 8.75153 7.00523 7.96117C5.43496 7.1708 4.08454 6.00436 3.07422 4.56572C3.07422 4.56572 -0.925781 13.5657 8.07422 17.5657C6.01475 18.9637 3.56138 19.6646 1.07422 19.5657C10.0742 24.5657 21.0742 19.5657 21.0742 8.06572C21.0733 7.78717 21.0465 7.50931 20.9942 7.23572C22.0148 6.22921 22.735 4.95843 23.0742 3.56572V3.56572Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.0742188 0.56543)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
    <!-- instgram -->
    <a href="https://www.instagram.com/dimot9/" rel="nofollow,norefferer">
      <svg
        class="w-6 h-6 text-accent hover:text-white duration-150 ease-linear"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0742 2.56543H7.07422C4.31279 2.56543 2.07422 4.80401 2.07422 7.56543V17.5654C2.07422 20.3269 4.31279 22.5654 7.07422 22.5654H17.0742C19.8356 22.5654 22.0742 20.3269 22.0742 17.5654V7.56543C22.0742 4.80401 19.8356 2.56543 17.0742 2.56543Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.0739 11.9357C16.1973 12.768 16.0552 13.6179 15.6677 14.3647C15.2802 15.1115 14.6671 15.7171 13.9156 16.0954C13.164 16.4737 12.3124 16.6053 11.4817 16.4717C10.6511 16.338 9.88369 15.9458 9.28876 15.3509C8.69384 14.756 8.30166 13.9886 8.16799 13.1579C8.03433 12.3273 8.16599 11.4756 8.54425 10.7241C8.92251 9.97258 9.52811 9.35947 10.2749 8.97197C11.0217 8.58447 11.8717 8.44232 12.7039 8.56573C13.5528 8.69162 14.3388 9.08719 14.9456 9.69404C15.5525 10.3009 15.948 11.0868 16.0739 11.9357Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5742 7.06543H17.5842"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    // animate section sequentially from top to bottom
    setTimeout(() => {
      this.$refs.helloPerson.classList.value =
        this.$refs.helloPerson.classList.value + " enter";
    }, 200);
    setTimeout(() => {
      this.$refs.textSection.classList.value =
        this.$refs.textSection.classList.value + " enter";
    }, 500);
    setTimeout(() => {
      this.$refs.links.classList.value =
        this.$refs.links.classList.value + " enter";
    }, 700);
  }
};
</script>

<style scoped>
p a {
  @apply underline hover:text-accent font-bold transition-colors duration-150 ease-linear;
}

.before-enter {
  opacity: 0;
  transform: translateY(150px) scale(0.9);
  transition: all 2s cubic-bezier(0.86, 0, 0.07, 1);
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
