    const burgerBtn = document.getElementById('burgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    burgerBtn.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('sidebar--open');
      overlay.classList.toggle('overlay--active', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--open');
      overlay.classList.remove('overlay--active');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });