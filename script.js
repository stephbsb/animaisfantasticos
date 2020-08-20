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
