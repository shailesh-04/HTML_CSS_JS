const section = document.querySelectorAll("section");
const navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height) {
      navLink.forEach(links => {
        links.classList.remove('Active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('Active');
      });
    };
  });
}
  