var navBar = document.getElementById("navbar");
      window.onscroll = function() {
        if (window.scrollY > 22) {
            navBar.classList.add("navbar-bg");
            navBar.classList.add("shadow-sm");
            navBar.classList.add("navbar-light");
            navBar.classList.remove("navbar-dark");
        } else {
            navBar.classList.remove("navbar-bg");
            navBar.classList.remove("shadow-sm");
            navBar.classList.remove("navbar-light");
            navBar.classList.add("navbar-dark");
        }
      };
