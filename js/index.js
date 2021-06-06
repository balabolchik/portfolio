const navItems = document.querySelectorAll('.navItem');

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        clearClassName( navItems, 'active');
        navItem.classList.add('active');
        clearClassName( '.contentUnit', 'active');
        changeActiveUnit(navItem.id)
        scrollTo(0, 0);
        clearClassName('*', "animationActive")
        addAnimation();
    })
})

function clearClassName(selector, clearedClass) {
    if (typeof(selector) == "string") {
        document.querySelectorAll(selector).forEach( el => el.classList.remove(clearedClass));
    } else {
        selector.forEach( el => el.classList.remove(clearedClass));
    }
}

function changeActiveUnit(newActiveUnit) {
    document.querySelector(`.${newActiveUnit}`).classList.add('active');
}


const animatedItems = document.querySelectorAll('.animated');

window.addEventListener('scroll', () => addAnimation());


function addAnimation() {
    if ( animatedItems.length > 0 ) {
        animatedItems.forEach(el => {
            const elemHeight = el.offsetHeight;
            const topElemPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const animStart = 1.25;

            let windowHeightWithoutElem = window.innerHeight - elemHeight / animStart;
            
            if (elemHeight > window.innerHeight) {
                windowHeightWithoutElem = window.innerHeight / animStart;

            }

            if ((pageYOffset > topElemPosition - windowHeightWithoutElem)) {
                el.classList.add('animationActive');
            } else if (el.classList.contains('hideAgain')){
                el.classList.remove('animationActive');
            }
        });
    }
}
addAnimation();