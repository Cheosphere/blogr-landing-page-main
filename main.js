const subMenuBtn = document.querySelectorAll('.header_nav_menu_item')
const headerSubMenu = document.querySelectorAll('.header_submenu')
const arrowIconMenu = document.querySelectorAll('.header_nav_menu_item_link_icon')
const menuMobileBtn = document.getElementById('menu_mobile')
const menuMobile = document.getElementById('header_nav_menu')

// Function that animates and changes hamburger button to close button
menuMobileBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('show_menu_mobile')
    menuMobileBtn.classList.toggle('menu_close')
    anime({
        targets: '.header_nav_menu',
        scale: [0, 1],
        opacity: {
            value: [0, 1],
            duration: 400
        },
        duration: 300,
        easing: 'easeInOutExpo'
    })

})

// Function that displays and hides submenu items
subMenuBtn.forEach((btn, index) => {
    // We listen to the click event on the button
    btn.addEventListener('click', () => {
        // If the submenu that has received a click is being shown, we hide it
        // Same procedure for arrow icon rotation
        if (headerSubMenu[index].classList.contains('show_menu')) {
            headerSubMenu[index].classList.remove('show_menu')
            arrowIconMenu[index].classList.remove('rotate')
        } else {
            // We make sure that any other submenu is hidden
            headerSubMenu.forEach(element => {
                if (element.classList.contains('show_menu')) {
                    element.classList.remove('show_menu')
                }
            })
            // Same procedure for arrow icon rotation
            arrowIconMenu.forEach(element => {
                if (element.classList.contains('rotate')) {
                    element.classList.remove('rotate')
                }
            })
            // We show or hide the submenu that receives a click
            // Same procedure for arrow icon rotation
            headerSubMenu[index].classList.toggle('show_menu')
            arrowIconMenu[index].classList.toggle('rotate')
        }

        anime({
            targets: '.header_submenu',
            scale: [0, 1],
            opacity: {
                value: [0, 1],
                duration: 400
            },
            duration: 300,
            easing: 'easeInOutExpo'
        })
    })
});
