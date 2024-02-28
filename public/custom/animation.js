// REGISTER PLUGIN
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.ta-nav-group',
  {
    y: -50,
    opacity: 0.8,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'easeIn',
  }
);

gsap.fromTo(
  '.ta-nav',
  {
    y: -100,
    opacity: 0.8,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'linear',
  }
);

// HAMBURGER ANIMATION CODE
document
  .querySelector('.hamburger-two-stick')
  .addEventListener('click', (e) => {
    if (e.target.classList.contains('hamburger-two-stick')) {
      e.target.classList.toggle('active');
    } else {
      let parent = e.target;

      while (!parent.classList.contains('hamburger-two-stick')) {
        parent = e.target.parentElement;
      }

      parent.classList.toggle('active');
    }

    document.querySelector('.ta-nav-mb').classList.toggle('active');
    document.querySelector('.ta-nav').classList.toggle('active');
    document.body.classList.toggle('disable-scroll');
  });
