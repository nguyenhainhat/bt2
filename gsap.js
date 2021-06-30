
let tlStart = gsap.timeline();
tlStart
	.to('.start-one .start-item', {
		height: 70,
		duration: 3,
		ease: 'power2.inOut',
	})
	.to(
		'.start-widthLoad',
		{
			width: 200,
			duration: 5,
			ease: 'power2.inOut',
		},
		'-=2'
	)
	.to(
		'.start-one .start-item',
		{
			opacity: 0,
			duration: 1,
			ease: 'power2.inOut',
		},
		'-=1'
	)
	.to(
		'.start-one',
		{
			y: '100%',
			duration: 2,
			ease: 'power2.inOut',
		},
		'-=0.5'
	)
	.to(
		'.start-hello',
		{
			height: 39,
			duration: 2,
			ease: 'power2.inOut',
		},
		'-=1'
	)
	.to('.start-hello', {
		height: 0,
		duration: 2,
		ease: 'power2.inOut',
	})
	.to(
		'.start-name',
		{
			height: 39,
			duration: 2,
			ease: 'power2.inOut',
		},
		'-=0.6'
	)
	.to(
		'.start-name',
		{
			height: 0,
			duration: 2,
			ease: 'power2.inOut',
		},
		'-=0.2'
	)
	.to(
		'.start-two',
		{
			x: '100%',
			duration: 2,
			ease: 'power2.inOut',
		},
		'-=0.8'
	);

// Navbar moblie
let tlNavMobile = gsap.timeline({
		paused: 'true',
	}),
	menuNavMoblie = select('.btn_menu'),
	closeMenuMoblie = select('.btn_close'),
	brandNav = select('.navbar-brand img'),
	itemCollapseMobile = selectAll('.navbar-collapse_ul li');

tlNavMobile
	.to('.navbar-collapse', {
		x: '0%',
		height: '330px',
		duration: 0.2,
		ease: 'expo.out',
	})
	.to(menuNavMoblie, {
		opacity: 0,
		duration: 0.1,
		ease: 'power2.inOut',
	})
	.to(closeMenuMoblie, {
		opacity: 1,
		x: '0',
		ease: 'power2.inOut',
	})
	.fromTo(
		brandNav,
		{
			width: 'calc(75px + 3vw)',
			duration: 0.2,
			ease: 'back.inOut',
		},
		{
			width: 'calc(75px + 5vw)',
			duration: 0.2,
			ease: 'back.inOut',
		}
	)
	.from(itemCollapseMobile, {
		y: '20px',
		opacity: 0,
		stagger: 0.1,
		ease: 'back.out',
	});

menuNavMoblie.addEventListener('click', function () {
	tlNavMobile.play();
});

closeMenuMoblie.addEventListener('click', function () {
	tlNavMobile.reverse();
});

// services
let tlServices = gsap.timeline({
	scrollTrigger: {
		trigger: '#services',
	},
});

tlServices
	.from('#services .section-header', {
		y: 100,
		opacity: 0,
		duration: 1.2,
	})

	.from(
		'#services .services-items',
		{
			scale: 0,
			opacity: 0,
			duration: 0.5,
			stagger: {
				each: 0.3,
				ease: 'power2.inOut',
			},
		},
		'-=0.2'
	);

// Portfolio
let tlPortfolio = gsap.timeline({
	scrollTrigger: {
		trigger: '.portfolio-scroll',
	},
});

tlPortfolio
	.from('.portfolio-scroll .section-header', {
		y: 100,
		opacity: 0,
		duration: 1,
	})

	.from(
		'.portfolio-list_items',
		{
			opacity: 0,
			duration: 1.5,
			stagger: {
				each: 0.3,
				ease: 'power1.inOut',
			},
		},
		'+=0.2'
	)

	.from(
		'.portfolio-item_wrap',
		{
			opacity: 0,
			stagger: {
				each: 0.2,
				ease: 'power2.inOut',
			},
		},
		'-=1.5'
	);

// features
let tlFeatures = gsap.timeline({
	scrollTrigger: {
		trigger: '#features',
	},
});

tlFeatures
	.from('#features .section-header', {
		y: 100,
		opacity: 0,
		duration: 1,
		ease: 'power3.inOut',
	})

	.from('.features-item', {
		y: 100,
		opacity: 0,
		duration: 1,
		ease: 'power3.inOut',
		stagger: {
			each: 0.3,
			ease: 'power1.inOut',
		},
	});

// counter
let tlCounter = gsap.timeline({
	scrollTrigger: {
		trigger: '#counter',
	},
});

tlCounter.from('.counter-item', {
	scale: 0,
	opacity: 0,
	duration: 1,
	delay: 1,
	stagger: {
		each: 0.3,
		ease: 'power3.inOut',
	},
});

// team
let tlTeam = gsap.timeline({
	scrollTrigger: {
		trigger: '#team',
	},
});

tlTeam
	.from('#team .section-header', {
		y: 100,
		opacity: 0,
		duration: 1,
		ease: 'power3.inOut',
	})

	.from(
		'.team-item',
		{
			y: 100,
			opacity: 0,
			duration: 1,
			stagger: {
				each: 0.2,
				ease: 'power3.inOut',
			},
		},
		'+=0.2'
	);

// Pricing
let tlPricing = gsap.timeline({
	scrollTrigger: {
		trigger: '#pricing',
	},
});

tlPricing
	.from('#pricing .section-header', {
		y: 100,
		opacity: 0,
		duration: 1,
		ease: 'power3.inOut',
	})

	.from(
		'.pricing-item',
		{
			y: 200,
			opacity: 0,
			duration: 1,
			stagger: {
				each: 0.3,
				ease: 'power3.inOut',
			},
		},
		'+=0.2'
	);

// carousel
let tlCarousel = gsap.timeline({
	scrollTrigger: {
		trigger: '#carousel',
	},
});

tlCarousel
	.from(
		'.owl-control_button',
		{
			y: 200,
			opacity: 0,
			duration: 1.5,
			stagger: {
				each: 1.5,
				ease: 'power3.inOut',
			},
		},
		'+=0.2'
	)

	.from(
		'.owl-carousel_content',
		{
			y: 200,
			opacity: 0,
			duration: 1.5,
			ease: 'power3.inOut',
		},
		'-=0.5'
	);

// contact
let tlContact = gsap.timeline({
	scrollTrigger: {
		trigger: '#contact',
	},
});

tlContact
	.from('#contact .section-header', {
		y: 100,
		opacity: 0,
		duration: 1,
		ease: 'power3.inOut',
	})

	.from('.contact-tilte', {
		y: 100,
		opacity: 0,
		duration: 1,
		stagger: {
			each: 2.5,
			ease: 'power3.inOut',
		},
	})

	.from(
		'.contact-form_group',
		{
			y: 100,
			opacity: 0,
			duration: 1.5,
			stagger: {
				each: 0.3,
				ease: 'power3.inOut',
			},
		},
		'-=2'
	)

	.from(
		'.contact-inf',
		{
			y: 100,
			opacity: 0,
			duration: 1.5,
			stagger: {
				each: 0.3,
				ease: 'power3.inOut',
			},
		},
		'-=1'
	);

// footer
let tlFooter = gsap.timeline({
	scrollTrigger: {
		trigger: '.footer',
	},
});

tlFooter.from(
	'.footer-scroll',
	{
		y: 100,
		opacity: 0,
		duration: 1.5,
		stagger: {
			each: 0.5,
			ease: 'power3.inOut',
		},
	},
	'+=0.5'
);
