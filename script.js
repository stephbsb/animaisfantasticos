/* Tab menu de imagens e descrição */
function initTabNav() {
  const tabmenu = document.querySelectorAll('.js-tabmenu li');

  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  function activeTab(index) {
    tabcontent.forEach((section, sectionindex) =>
      index === sectionindex
        ? section.classList.add('ativo')
        : section.classList.remove('ativo')
    );
  }

  tabmenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

initTabNav();

/* Faq Accordion */
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach((accordionItem) => {
    accordionItem.addEventListener('click', activeAccordion);
  });
}
initAccordion();

/* scroll smooth */
function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');

    const elem = document.querySelector(href);

    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSmooth();

/* Animação ao scroll */
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = 0.5 * window.innerHeight;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;

      if (sectionTop < 0) {
        section.classList.add('ativo');
      }
    });
  }
  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();
