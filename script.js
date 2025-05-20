  const nav = document.getElementById('nav');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  VanillaTilt.init(document.querySelectorAll(".construction_card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.05
  });

  // Card click function (not wired to anything currently)
  function thecard() {
    console.log("the First Card is clicked");
  }

  // Toggle dropdown
  window.toggleDropdown = function () {
    const dropdown = document.querySelector('.dropdown-options');
    dropdown.classList.toggle('show');
  };

  // Handle dropdown selection
  window.selectOption = function (option) {
    const dropdownSelected = document.querySelector('.dropdown-selected');
    dropdownSelected.innerText = `Search by ${option.charAt(0).toUpperCase() + option.slice(1)}`;
    document.getElementById('searchType').value = option;
    toggleDropdown();
    searchFunction();
  };

  // Search filter
  window.searchFunction = function () {
    let searchType = document.getElementById('searchType').value;
    let input = document.getElementById('searchBar').value.toUpperCase();
    let cards = document.querySelectorAll('.construction_card');

    cards.forEach(card => {
      let title = card.querySelector('h3').innerText.toUpperCase();
      let owner = card.querySelector('.owner').innerText.toUpperCase();
      let plotId = card.querySelector('.plot-id').innerText.toUpperCase();
      let approval = card.querySelector('.approval').innerText.toUpperCase();

      let matches = false;

      if (searchType === 'Address' && title.includes(input)) {
        matches = true;
      } else if (searchType === 'owner' && owner.includes(input)) {
        matches = true;
      } else if (searchType === 'plotId' && plotId.includes(input)) {
        matches = true;
      } else if (searchType === 'approval' && approval.includes(`APPROVAL STATUS: ${input}`)) {
        matches = true;
      }

      card.style.display = matches ? "" : "none";
    });
  };
});
 