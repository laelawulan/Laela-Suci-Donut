// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika donut menu di klik
document.querySelector('#donut-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav
const donut = document.querySelector('#donut-menu');

document.addEventListener('click', function (e) {
  if (!donut.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
