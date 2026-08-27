const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.nav-links');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
  const isOpen = siteMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('.sr-only').textContent = isOpen ? '메뉴 닫기' : '메뉴 열기';
});

siteMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('.sr-only').textContent = '메뉴 열기';
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(contactForm).get('name');
  formStatus.textContent = `${name}님, 메시지를 확인했습니다. 곧 답장드릴게요.`;
  contactForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();