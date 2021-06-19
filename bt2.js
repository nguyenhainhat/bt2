const select = (elm, block = document) => {
    return block.querySelector(elm)
}

const selectAll = (elm, block = document) => {
    return block.querySelectorAll(elm)
}

const body = select('#head-page'),
    navbar = select('.navbar'),
    collNav = select('.navbar-collapse'),
    listCollNav = select('.menu-moblie .navbar-collapse_ul'),
    btnNav = select('.navbar-button'),
    collScroll = select('.navbar-collsapseScrolling'),
    menuMoblie = select('.menu-moblie'),
    navHeader = select('.navbar-header'),
    header = select('#header-wrap')


// Menu moblie 
btnNav.addEventListener('click', function () {
    if (!(navbar.classList.contains('navbar-scroll')) && !(menuMoblie.classList.contains('navbar-menu_moblie'))) {
        collNav.classList.toggle('navbar-active')
    }
})

function checkClientAndScrollClick() {

    if (!(menuMoblie.classList.contains('navbar-menu_moblie')) && (body.clientWidth > 640 && body.clientWidth < 1092) && (collNav.classList.contains('navbar-active'))) {
        navbar.classList.add('navbar-scroll')
        if (collNav.classList.contains('navbar-active')) {
            navbar.style.height = '380px'
        }
        collNav.style.display = 'none'
        menuMoblie.style.height = '330px'
        navbar.style.overflow = 'hidden'
        btnNav.addEventListener('click', function () {
            if (!(menuMoblie.classList.contains('navbar-menu_moblie')) || scrollY < 10) {
                navbar.style.overflow = 'inherit'
            } else {
                navbar.style.overflow = 'hidden'
                collNav.classList.remove('navbar-active')
            }
            menuMoblie.classList.toggle('navbar-menu_moblie')
            navHeader.style.top = '0px'
            navbar.style.height = '55px'

        })
    }

    else {
        navbar.classList.add('navbar-scroll')
        navbar.style.height = '55px'
        if ((body.clientWidth > 640 && body.clientWidth < 1092)) {
            collNav.classList.remove('navbar-active')
            btnNav.addEventListener('click', function () {
                menuMoblie.classList.toggle('navbar-menu_moblie')
                if (!(menuMoblie.classList.contains('navbar-menu_moblie')) && (navbar.classList.contains('navbar-scroll'))) {
                    menuMoblie.style.height = ' 0px '
                } else {
                    menuMoblie.style.height = ' 330px '
                }
            })
        }
        else {
            btnNav.addEventListener('click', function () {
                if ((navbar.classList.contains('navbar-scroll'))) {
                    collNav.classList.toggle('navbar-active')
                    menuMoblie.classList.remove('navbar-menu_moblie')
                }
            })
        }
    }
}

function checkScrollMinClick() {
    navbar.classList.remove('navbar-scroll')
    menuMoblie.classList.remove('navbar-menu_moblie')
    navbar.style.height = '55px'
    navbar.style.transition = 'none'
    navbar.style.overflow = 'inherit'
    menuMoblie.style.height = '0px'
    collNav.style.display = 'block'
    navHeader.style.top = '0px'
    btnNav.addEventListener('click', function () {
        if (!(navbar.classList.contains('navbar-scroll'))) {
            menuMoblie.classList.remove('navbar-menu_moblie')
            menuMoblie.style.height = ' 0px '
        }
    })
}

window.addEventListener('scroll', function () {
    if (scrollY > 10) {
        checkClientAndScrollClick();
    }
    else {
        checkScrollMinClick();
    }

})

// Scroll Top navbar 


// Slider background
const slides = select('.header-slider_content')
const imgslider = selectAll('.header-slider_img')
const iconSlider = selectAll('.header-slider_li')

// Button
const nextBtn = select('.header-slider_right')
const prevBtn = select('.header-slider_left')

// Caption
const headerSlider = selectAll('.header-slider_caption h2')
const textSlider = selectAll('.header-slider_caption p')
const buttonSlider = selectAll('.header-slider_caption a')

// Counter
let counter = 1
// const size = img[0].clientWidth
const btnCarouselSlider1 = select('.header-slider_li:nth-child(1)')
const btnCarouselSlider2 = select('.header-slider_li:nth-child(2)')
const btnCarouselSlider3 = select('.header-slider_li:nth-child(3)')


// slide 1
slides.style.transform = 'translateX(' + (-100 * counter) + '%)'
iconSlider[counter - 1].classList.add('activesSlider')

// Button Listeners
nextBtn.addEventListener('click', () => {
    nextSlides()
})

function nextAddClassListSlider(str, counter, classSlider) {

    if (str == buttonSlider) {
        if (imgslider[counter].id === 'lastSlides') {
            str[counter + 1].classList.add(classSlider)
        }
        return str[counter].classList.add(classSlider),
            str[counter - 1].classList.remove(classSlider),
            str[counter - 2].classList.remove(classSlider)

    }

    return str[counter - 1].classList.add(classSlider),
        str[counter - 2].classList.remove(classSlider)

}

function nextSlides() {
    if (counter >= imgslider.length - 1) return;
    counter++;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)'
    slides.style.transition = 'transform 0.6s cubic-bezier(.83,.58,.22,.34)'
    if (imgslider[counter].id !== 'firstClone') {
        nextAddClassListSlider(iconSlider, counter, 'activesSlider')
        nextAddClassListSlider(headerSlider, counter, 'fadeDown')
        nextAddClassListSlider(textSlider, counter, 'fade')
    }
    nextAddClassListSlider(buttonSlider, counter, 'fadeUp')
    setTimeout(nextSlides,3000);
}
// nextSlides()

function prevAddClassListSlider(str, counter, classSlider) {
    if (str == buttonSlider) {
        if (imgslider[counter].id === 'firstSlides') {
            str[counter - 1].classList.add(classSlider)
        }
        return str[counter].classList.add(classSlider),
            str[counter + 1].classList.remove(classSlider),
            str[counter + 2].classList.remove(classSlider)

    }
    return str[counter - 1].classList.add(classSlider),
        str[counter].classList.remove(classSlider)

}

prevBtn.addEventListener('click', () => {

    if (counter <= 0) return;
    slides.style.transition = 'transform 0.6s cubic-bezier(.83,.58,.22,.34)'
    counter--;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)'
    if (imgslider[counter].id !== 'lastClone') {
        prevAddClassListSlider(iconSlider, counter, 'activesSlider')
        prevAddClassListSlider(headerSlider, counter, 'fadeDown')
        prevAddClassListSlider(textSlider, counter, 'fade')
    }
    prevAddClassListSlider(buttonSlider, counter, 'fadeUp')
})


function addClassSliderLastEndAnimate(str, counter, classSlider) {

    if (str == buttonSlider) {
        return buttonSlider[counter].classList.add('fadeUp'),
            buttonSlider[counter + 1].classList.add('fadeUp'),
            buttonSlider[counter - 3].classList.remove('fadeUp'),
            buttonSlider[counter - 2].classList.remove('fadeUp')
    }
    return str[counter - 1].classList.add(classSlider),
        str[counter - 3].classList.remove(classSlider)
}

function addClassSliderFirstEndAnimate(str, counter, classSlider) {

    if (str == buttonSlider) {

        return buttonSlider[counter - 1].classList.add('fadeUp'),
            buttonSlider[counter].classList.add('fadeUp'),
            buttonSlider[counter + 3].classList.remove('fadeUp')
    }

    return str[counter - 1].classList.add(classSlider),
        str[counter + 1].classList.remove(classSlider)

}

slides.addEventListener('transitionend', () => {
    if (imgslider[counter].id === 'lastClone') {
        slides.style.transition = 'none'
        counter = imgslider.length - 2
        slides.style.transform = 'translateX(' + (-100 * counter) + '%)'
        addClassSliderLastEndAnimate(iconSlider, counter, 'activesSlider')
        addClassSliderLastEndAnimate(headerSlider, counter, 'fadeDown')
        addClassSliderLastEndAnimate(textSlider, counter, 'fade')
        addClassSliderLastEndAnimate(buttonSlider, counter, 'fadeUp')
    }
    if (imgslider[counter].id === 'firstClone') {
        if (counter <= 0) return;
        slides.style.transition = 'none'
        counter = imgslider.length - 4
        slides.style.transform = 'translateX(' + (-100 * counter) + '%)'

        addClassSliderFirstEndAnimate(iconSlider, counter, 'activesSlider')
        addClassSliderFirstEndAnimate(headerSlider, counter, 'fadeDown')
        addClassSliderFirstEndAnimate(textSlider, counter, 'fade')
        addClassSliderFirstEndAnimate(buttonSlider, counter , 'fadeUp')
    }

})

function btnFirstCaroulSlider(str, counter, classSlider) {

    if (str == buttonSlider) {
        return str[counter - 1].classList.add(classSlider),
            str[counter].classList.add(classSlider),
            str[counter + 1].classList.remove(classSlider),
            str[counter + 2].classList.remove(classSlider),
            str[counter + 3].classList.remove(classSlider)
    }

    return str[counter - 1].classList.add(classSlider),
        str[counter].classList.remove(classSlider),
        str[counter + 1].classList.remove(classSlider)
}

btnCarouselSlider1.addEventListener('click', () => {
    if (counter >= imgslider.length - 1) return;
    counter = 1;
    slides.style.transition = 'transform 0.6s ease-in-out'
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)'

    btnFirstCaroulSlider(iconSlider, counter, 'activesSlider')
    btnFirstCaroulSlider(headerSlider, counter, 'fadeDown')
    btnFirstCaroulSlider(textSlider, counter, 'fade')
    btnFirstCaroulSlider(buttonSlider, counter, 'fadeUp')

})

function btnSecondCaroulSlider(str, counter, classSlider) {

    if (str == buttonSlider) {
        return str[counter].classList.add(classSlider),
            str[counter - 1].classList.remove(classSlider),
            str[counter - 2].classList.remove(classSlider),
            str[counter + 1].classList.remove(classSlider),
            str[counter + 2].classList.remove(classSlider)
    }

    return str[counter - 1].classList.add(classSlider),
        str[counter - 2].classList.remove(classSlider),
        str[counter].classList.remove(classSlider)

}

btnCarouselSlider2.addEventListener('click', () => {
    if (counter >= imgslider.length - 1) return;
    counter = 2;
    slides.style.transition = 'transform 0.6s ease-in-out'
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)'

    btnSecondCaroulSlider(iconSlider, counter, 'activesSlider')
    btnSecondCaroulSlider(headerSlider, counter, 'fadeDown')
    btnSecondCaroulSlider(textSlider, counter, 'fade')
    btnSecondCaroulSlider(buttonSlider, counter, 'fadeUp')

})

function btnThirdCaroulSlider(str, counter, classSlider) {

    if (str == buttonSlider) {
        return str[counter].classList.add(classSlider),
            str[counter + 1].classList.add(classSlider),
            str[counter - 1].classList.remove(classSlider),
            str[counter - 2].classList.remove(classSlider),
            str[counter - 3].classList.remove(classSlider)
    }

    return str[counter - 1].classList.add(classSlider),
        str[counter - 2].classList.remove(classSlider),
        str[counter - 3].classList.remove(classSlider)

}

btnCarouselSlider3.addEventListener('click', () => {
    if (counter >= imgslider.length - 1) return;
    counter = 3;
    slides.style.transition = 'transform 0.6s ease-in-out'
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)'

    btnThirdCaroulSlider(iconSlider, counter, 'activesSlider')
    btnThirdCaroulSlider(headerSlider, counter, 'fadeDown')
    btnThirdCaroulSlider(textSlider, counter, 'fade')
    btnThirdCaroulSlider(buttonSlider, counter, 'fadeUp')

})

// portfolio filter
const portfolio = select('#portfolio'),
    portfolioList = select('.portfolio-list'),
    portfolioListItems = selectAll('.portfolio-list_items'),
    portfolioItems = selectAll('.portfolio-item'),
    portDisNone = selectAll('.portfolio-item_wrap')

// init Isotope
var $filterItem = $('#portfolio').isotope({
    itemSelector: '.portfolio-item_wrap',
    layoutMode: 'masonry'
});

// bind filter button click
$('.portfolio-list').on('click', '.portfolio-list_items', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $filterItem.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.portfolio-list').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.portfolio-list_items', function () {
        $buttonGroup.find('.portfolio-list_active').removeClass('portfolio-list_active');
        $(this).addClass('portfolio-list_active');
    });
});

// Counter
const counterContainer = select('#counter')
const valueCounter = selectAll('.counter-item_value h3')
const rate = 10;
const numberCounter = 11 / 4


window.addEventListener('scroll', () => {
    // const windowWidth = window.innerWidth
    const heightWindowSubtractionWidth = body.clientHeight / numberCounter
    // Subtraction : phép trừ

    if (scrollY < heightWindowSubtractionWidth) {
        valueCounter.forEach(e => {
            let eml = 0;
            let valueCounterItem = parseInt(e.innerHTML);
            setInterval(() => {
                if (eml < valueCounterItem) {
                    eml += rate;
                    e.innerHTML = eml
                }
            }, 50)
        })
    }

    // return
})


// Pricing Table
const pricingBtn = selectAll('.pricing-item_signup'),
    pricingBtnItem = select('.pricing-item_signup a'),
    pricingItem = selectAll('.pricing-item')

pricingBtn.forEach(eml => {
    eml.addEventListener('click', (e) => {
        pricingItem.forEach((item) => {
            item.classList.remove('pricing-active')
            item.addEventListener('click', (e1) => {
                if (e.target == e1.target) {
                    item.classList.add('pricing-active')
                }
            })
        })
    })
})

// carousel

const owlCarousel = select('.owl-carousel'),
    owlCarouselItem = selectAll('.owl-carousel_item'),
    owlControlRight = select('.owl-control_right'),
    owlControlLeft = select('.owl-control_left'),
    owlContainer = select('.owl-container')

// set Width carousel Item responsive

function resizeFunction() {
    console.clear();
    const widthOwlContainer = owlContainer.clientWidth
    owlCarouselItem.forEach(eml => {
        eml.style.width = widthOwlContainer + 'px'
        owlCarousel.style.width = widthOwlContainer * owlCarouselItem.length + 24 + 'px'
    })
    // owl carousel item = Width(owl container) && owl carousel = owl carousel item * length + 24(padding)
}

// set slides carousel

owlCarousel.style.transform = ('translateX(' + (-100 * counter / owlCarouselItem.length) + '%)')
owlCarousel.style.transition = 'transform 0.5s cubic-bezier(.83,.58,.22,.34)'

owlControlRight.addEventListener('click', () => {
    if (owlCarouselItem.length - 1 <= counter) return;
    counter++
    owlCarousel.style.transform = ('translateX(' + (-100 * counter / owlCarouselItem.length) + '%)')
    owlCarousel.style.transition = 'transform 0.5s cubic-bezier(.83,.58,.22,.34)'

})

owlControlLeft.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--
    owlCarousel.style.transform = ('translateX(' + (-100 * counter / owlCarouselItem.length) + '%)')
    owlCarousel.style.transition = 'transform 0.5s cubic-bezier(.83,.58,.22,.34)'

})

owlCarousel.addEventListener('transitionend', () => {

    if (owlCarouselItem[counter].id == 'firstClone') {
        counter = owlCarouselItem.length - 4
        owlCarousel.style.transform = ('translateX(' + (-100 * counter / owlCarouselItem.length) + '%)')
        owlCarousel.style.transition = 'none'
    }

    if (owlCarouselItem[counter].id == 'lastClone') {
        counter = owlCarouselItem.length - 2
        owlCarousel.style.transform = ('translateX(' + (-100 * counter / owlCarouselItem.length) + '%)')
        owlCarousel.style.transition = 'none'
    }
})

// Form
const formBtn = select('.contact-form_btn'),
    form = select('#contactForm'),
    formItem = selectAll('.contact-form_group'),
    formInput = selectAll('.contact-form_input'),
    formValid = selectAll('.contact-form [aria-invalid=true]')

function clearError() {
    selectAll('.help-text').forEach(eml => {
        return eml.remove()
    })
}

form.addEventListener('submit', function (event) {
    clearError()
    event.preventDefault();
    formValid.forEach(function (input) {
        let messValidate = input.getAttribute("data-validation-required-message");
        let valueInput = input.value.trim();
        if (valueInput === '') {
            setErrorForm(input, messValidate);
        }
        else {
            setSuccessForm(input);
        }
    })
})


function setErrorForm(input, message) {
    let parentNode = input.parentNode;
    let groupHelp = select(".contact-form_help", parentNode);
    console.log(parentNode)
    let subText = document.createElement("ul");
    let newText = document.createElement("li");

    parentNode.classList.add('error');
    parentNode.classList.remove('success');
    subText.classList.add('help-text');
    subText.appendChild(newText);
    newText.innerHTML = message;
    groupHelp.appendChild(subText);
}

function setSuccessForm(input) {
    input.parentNode.classList.remove('error');
    input.parentNode.classList.add('success');
}



// back-to-top
const iconBackTop = select('.back-to-top')

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset + '--' +  body.clientHeight)

    if (window.pageYOffset <= header.clientHeight) {
        iconBackTop.style.opacity = '0'
        iconBackTop.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
    else {
        iconBackTop.style.opacity = '1'
        iconBackTop.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
})