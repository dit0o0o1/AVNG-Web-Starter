function toggleMenu() {
  const mobile = document.querySelector('.mobile');
  if (mobile) mobile.classList.toggle('open');
}

function setActiveNav() {
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('nav a[data-active]').forEach(a => {
    const href = a.getAttribute('href');
    const normalized = href.replace(/\/index\.html$/, '/');
    if (path.endsWith(normalized)) {
      a.classList.add('active');
    }
  });
}

window.addEventListener('DOMContentLoaded', setActiveNav);

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  console.log('Form submission (demo only):', data);
  alert('გმადლობთ! თქვენი მონაცემები მიღებულია.\n(დემო რეჟიმი)');
}

document.addEventListener('submit', function (e) {
  const form = e.target;
  if (form.matches('[data-demo-form]')) {
    handleFormSubmit(e);
  }
});