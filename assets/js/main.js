const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-navigation');
const currentYearEl = document.querySelector('#current-year');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navList.dataset.expanded = String(!isExpanded);
  });
}

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    alert(`Thank you, ${name}! I'll be in touch soon.`);
    contactForm.reset();
  });
}
