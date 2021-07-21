/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var name = $(."name");
var email = $(."email");
var submitBtn = $(".submit-btn");
var container = $(".card-container");

submitBtn.on("click", appendList); 

function appendItem(name, email) {
  event.preventDefault(); 
  console.log(`${name}, ${email}`);
 
  container.append(`
    <div>
      <p class="new-item">${name}</p>          
    </div>
    `);
};


// 4️⃣ 💥Delete elements

  // Listen for a click on the card container 
    container.on("click", deleteItem);

  // Create a function to delete the user's input 
  // 💥Declare function 
    function deleteItem() {
      
      // 💥event.target refers to the element that was clicked on
      // 💥className checks the class that is on an element
      // 💥if the element has the class of new-item...
      if (event.target.className === "new-item") {
      
        // 💥event.target refers to the element that was clicked on
        // 💥parentNode travels up and looks for the direct parent element
        // 💥then we will remove the PARENT element, which will be the div
        event.target.parentNode.remove();
      };    
    };