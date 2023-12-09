// currentPageHighlight.js
export const highlightCurrentPage = (pathname) => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === pathname) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  
  