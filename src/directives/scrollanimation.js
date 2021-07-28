// Observe if given target element (entry) intersected the viewport
const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");

        // class is added - we don't need to observe this element anymore (animation happened already)
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

export default {
  beforeMount(el) {
    el.classList.add("before-enter");
    // add elemented to be observed by the animatedScrollObserver
    animatedScrollObserver.observe(el);
  }
};
