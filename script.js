document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
  
    // Add reveal class initially
    sections.forEach(sec => sec.classList.add('reveal'));
  
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerInstance.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
  
    sections.forEach(sec => observer.observe(sec));
  });
  