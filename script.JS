function handleBurgerToggle() {
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerIcon = document.querySelector(".burger-icon");
  
    if (window.innerWidth <= 767) {
      if (this.checked) {
        burgerMenu.style.display = "flex";
        burgerMenu.style.flexDirection = 'column';
        burgerIcon.style.display = "none";
      } else {
        burgerMenu.style.display = "none";
        burgerIcon.style.display = "block";
      }
    } else {
      burgerMenu.style.display = "flex";
      burgerMenu.style.flexDirection = 'row';
    }
  }
  
  const burgerToggle = document.getElementById("burger-toggle");
  burgerToggle.addEventListener("input", handleBurgerToggle); // Change event type to "input" for better compatibility
  
  // Invoke handleBurgerToggle initially to set the initial state of the burger menu
  handleBurgerToggle();