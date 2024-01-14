//FOR CHANGING BACKGROUND COLOR OF NAVIGATION BAR
let navBackground = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 350){
        navBackground.classList.add('navScrolled');
    }else if(window.scrollY < 350){
        navBackground.classList.remove('navScrolled');
    }
});

//CHANGING COLOR OF NAGIVATION ITEMS AS PER THE ACTIVE ITEM
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        let element = document.getElementById("#five");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li [href*=' + id + '] ').classList.add('active');
            })
        }
       

    });
};