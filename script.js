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

const accordionList = document.querySelectorAll('.js-accordion dt');

function activeAccordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((accordionItem) => {
  accordionItem.addEventListener('click', activeAccordion);
});
