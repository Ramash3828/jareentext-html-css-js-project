// Toggle Menu bar------------------
const toggle = document.querySelector(".nav__toggle-btn");
const menu = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const nav__toggle = document.querySelector(".nav__toggle-menu");
toggle.onclick = function () {
	menu.classList.toggle("active");
	if (menu.classList[1] == "active") {
		nav__toggle.style.right = `0px`;
	} else {
		nav__toggle.style.right = `-250px`;
	}
};

window.addEventListener("scroll", function () {
	const position = window.pageYOffset;
	console.log(position);

	if (position > 10) {
		// menu.style.backgroundColor = `rgba(75, 240, 185, 0.704)`;
		navLink.forEach((item) => {
			item.style.paddingTop = "15px";
			item.style.paddingBottom = "15px";
		});
		document.querySelector(".scroll-top").style.display = "block";
	} else {
		navLink.forEach((item) => {
			item.style.paddingTop = "30px";
			item.style.paddingBottom = "30px";
		});
		document.querySelector(".scroll-top").style.display = "none";
	}
});

// Slick slider -------------------
$(".home__slider").slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: "linear",
	slidesToShow: 1,
	// slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1082,
			settings: {
				slidesToShow: 1,
				// slidesToScroll: 1,
				fade: true,
				cssEase: "linear",
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				fade: true,
				// slidesToScroll: 1,
				fade: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				// slidesToScroll: 1,
				fade: true,
			},
		},
	],
});

const scrllTop = () => {
	window.scrollTo(0, 0);
};
