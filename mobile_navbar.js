class MobileNavbar{
    constructor(mobileMenu, navList, NavLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.NavLinks = document.querySelectorAll(NavLinks);
        this.activClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.NavLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
}
    handleClick(){
        this.navList.classList.toggle(this.activClass);
        this.mobileMenu.classList.toggle(this.activClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar2 = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar2.init();