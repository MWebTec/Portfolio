function getCurrentSection() {
  const sections = document.querySelectorAll("section");
  let currentSection = null;
  let currentSectionId = null;

  sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const halfViewportHeight = window.innerHeight / 3;

      if (window.scrollY + halfViewportHeight >= sectionTop && window.scrollY + halfViewportHeight < sectionBottom) {
          currentSection = section;
          currentSectionId = section.getAttribute("id");
      }
  });

    return currentSectionId;
}   

function updateNavigation() {
    const currentSectionId = getCurrentSection();
    const navigationLinks = document.querySelectorAll("#navbarNavAltMarkup a");
  console.log("hallo");
    navigationLinks.forEach((link) => {
      link.classList.remove("active");
      
      if (link.innerHTML === currentSectionId) {
        link.classList.add("active");
        const linkWidth = link.offsetWidth;
        link.style.setProperty('--link-width', `${linkWidth}px`);
      }
    });
  }
  
  document.addEventListener("scroll", updateNavigation);
  
  window.addEventListener("load", updateNavigation);