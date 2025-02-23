// Get all sections and menu items
const sections = document.querySelectorAll('.card_details_content');
const menuItems = document.querySelectorAll('.menu-item');
const cardDetails = document.querySelector('.card_details');
const mainContainer = document.querySelector('.main-container');

const scrollHandler = () => {
  sections.forEach((section) => {
    const scrollPosition = cardDetails.scrollTop || mainContainer.scrollTop;
    const sectionTop = section.offsetTop - (cardDetails.offsetTop || mainContainer.offsetTop);
    const sectionBottom = sectionTop + section.offsetHeight;

    // If section is at or past the 300px scroll mark
    if (sectionTop && scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Remove active class from all menu items
      menuItems.forEach((item) => item.classList.remove('active'));

      // Add active class to corresponding menu item
      const sectionId = section.id;
      const activeMenuItem = document.querySelector(
        `.menu-item a[href="#${sectionId}"]`,
      ).parentElement;
      activeMenuItem.classList.add('active');
    }
  });
};

cardDetails.addEventListener('scroll', scrollHandler);
mainContainer.addEventListener('scroll', scrollHandler);

document.getElementById('dob').innerHTML = new Date().getFullYear() - 1986;
