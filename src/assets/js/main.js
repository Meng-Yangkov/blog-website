/**
* Template Name: AgriCulture
* Updated: Oct 2025 — Angular-safe version
*/

(function () {
  "use strict";

  /** Apply .scrolled class to body when page is scrolled */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (
      !selectHeader.classList.contains('scroll-up-sticky') &&
      !selectHeader.classList.contains('sticky-top') &&
      !selectHeader.classList.contains('fixed-top')
    )
      return;

    window.scrollY > 100
      ? selectBody.classList.add('scrolled')
      : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /** Scroll-up sticky header */
  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    const selectHeader = document.querySelector('#header');
    if (!selectHeader || !selectHeader.classList.contains('scroll-up-sticky'))
      return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = `-${selectHeader.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = '0';
    } else {
      selectHeader.style.removeProperty('top');
      selectHeader.style.removeProperty('position');
    }
    lastScrollTop = scrollTop;
  });

  /** Mobile nav toggle */
  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }

  // Wait for DOM and Angular to render
  window.addEventListener('load', () => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    /** Hide mobile nav on same-page/hash links */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    /** Toggle mobile nav dropdowns */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.parentNode) {
          this.parentNode.classList.toggle('active');
          const next = this.parentNode.nextElementSibling;
          if (next) next.classList.toggle('dropdown-active');
        }
        e.stopImmediatePropagation();
      });
    });

    /** Preloader */
    const preloader = document.querySelector('#preloader');
    if (preloader) preloader.remove();

    /** Scroll top button */
    const scrollTop = document.querySelector('.scroll-top');
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add('active')
          : scrollTop.classList.remove('active');
      }
    }
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    window.addEventListener('scroll', toggleScrollTop);
    toggleScrollTop();

    /** Animation on scroll (AOS) */
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }

    /** Auto-generate carousel indicators */
    document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
      const carousel = carouselIndicator.closest('.carousel');
      if (!carousel) return;

      const items = carousel.querySelectorAll('.carousel-item');
      items.forEach((item, index) => {
        carouselIndicator.innerHTML += `
          <li data-bs-target="#${carousel.id}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></li>`;
      });
    });

    /** Init Swiper sliders */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(swiperElement => {
        const configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;

        let config = {};
        try {
          config = JSON.parse(configEl.innerHTML.trim());
        } catch (e) {
          console.warn("Invalid Swiper config", e);
        }

        if (swiperElement.classList.contains("swiper-tab")) {
          if (typeof initSwiperWithCustomPagination === 'function') {
            initSwiperWithCustomPagination(swiperElement, config);
          }
        } else if (typeof Swiper !== 'undefined') {
          new Swiper(swiperElement, config);
        }
      });
    }

    initSwiper();

    /** GLightbox init */
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    }
  });
})();
