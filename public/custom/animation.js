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
  });

// CUSTOM CODE FOR STICKY IN/OUT NAVBAR ANIMATION
var lastScrollTop = 0;

document.addEventListener(
  'scroll',
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      gsap.to('.navbar-main', {
        transform:
          'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        duration: 0.5,
        ease: 'easeIn',
      });
      // downscroll code
    } else if (st < lastScrollTop) {
      gsap.to('.navbar-main', {
        transform:
          'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        duration: 0.5,
        ease: 'easeIn',
      });
      // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
