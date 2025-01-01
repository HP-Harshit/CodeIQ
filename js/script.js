document.addEventListener('DOMContentLoaded', function() {
    var contactModal = document.getElementById('contactModal');
    var inquiryModal = document.getElementById('inquiryModal');
    var loginModal = document.getElementById('loginModal');

    var contactBtn = document.getElementById('contactBtn');
    var inquiryBtn = document.getElementById('inquiryBtn');
    var loginBtn = document.getElementById('loginBtn');

    var closeContact = document.getElementById('closeContact');
    var closeInquiry = document.getElementById('closeInquiry');
    var closeLogin = document.getElementById('closeLogin');

    contactBtn.onclick = function() {
        contactModal.classList.add('show');
        contactModal.style.display = 'block';
    };

    inquiryBtn.onclick = function() {
        inquiryModal.classList.add('show');
        inquiryModal.style.display = 'block';
    };

    loginBtn.onclick = function() {
        loginModal.classList.add('show');
        loginModal.style.display = 'block';
    };

    closeContact.onclick = function() {
        contactModal.classList.add('hide');
        setTimeout(function() {
            contactModal.style.display = 'none';
            contactModal.classList.remove('show', 'hide');
        }, 300);
    };

    closeInquiry.onclick = function() {
        inquiryModal.classList.add('hide');
        setTimeout(function() {
            inquiryModal.style.display = 'none';
            inquiryModal.classList.remove('show', 'hide');
        }, 300);
    };

    closeLogin.onclick = function() {
        loginModal.classList.add('hide');
        setTimeout(function() {
            loginModal.style.display = 'none';
            loginModal.classList.remove('show', 'hide');
        }, 300);
    };

    window.onclick = function(event) {
        if (event.target === contactModal) {
            contactModal.classList.add('hide');
            setTimeout(function() {
                contactModal.style.display = 'none';
                contactModal.classList.remove('show', 'hide');
            }, 300);
        }
        if (event.target === inquiryModal) {
            inquiryModal.classList.add('hide');
            setTimeout(function() {
                inquiryModal.style.display = 'none';
                inquiryModal.classList.remove('show', 'hide');
            }, 300);
        }
        if (event.target === loginModal) {
            loginModal.classList.add('hide');
            setTimeout(function() {
                loginModal.style.display = 'none';
                loginModal.classList.remove('show', 'hide');
            }, 300);
        }
    };

    // Add active class to active tab
    var navLinks = document.querySelectorAll('header nav ul li a, header nav ul li button');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });


    // News/Announcement Crousel



    var newsCarousel = document.getElementById('newsCarousel');
    var leftBtn = document.getElementById('leftBtn');
    var rightBtn = document.getElementById('rightBtn');
    var position = 0;
    var itemsPerPage = 3;
    var totalItems = newsCarousel.children.length;

    // Function to scroll the carousel to the left
    function scrollLeft() {
        if (position > 0) {
            position -= 1;
            newsCarousel.style.transform = `translateX(${-position * 320}px)`;
        }
    }

    // Function to scroll the carousel to the right
    function scrollRight() {
        if (position < totalItems - itemsPerPage) {
            position += 1;
            newsCarousel.style.transform = `translateX(${-position * 320}px)`;
        } else {
            position = 0;
            newsCarousel.style.transform = `translateX(0)`;
        }
    }

    // Auto-scroll the carousel to the right every 3000ms
    var autoScroll = setInterval(scrollRight, 3000);

    // Event listeners for the navigation buttons
    leftBtn.addEventListener('click', function() {
        clearInterval(autoScroll);
        scrollLeft();
        autoScroll = setInterval(scrollRight, 3000);
    });

    rightBtn.addEventListener('click', function() {
        clearInterval(autoScroll);
        scrollRight();
        autoScroll = setInterval(scrollRight, 3000);
    });



    // Testimonial Crousel 
    // Testimonial Carousel
    const track = document.querySelector('.testimonial-carousel-slide');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.testimonials-carousel .testimonial-carousel-btn.next');
    const prevButton = document.querySelector('.testimonials-carousel .testimonial-carousel-btn.prev');
    const slideWidth = slides[0].getBoundingClientRect().width + 20; // Adjust for margin
    let currentIndex = 0;
    const autoScrollInterval = 3000;
    const visibleSlides = 3; // Number of slides visible at a time

    const setSlidePosition = (slide, index) => {
        slide.style.left = (slideWidth * index) + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        const targetIndex = slides.indexOf(targetSlide);
        const offset = targetIndex * slideWidth;
        track.style.transform = 'translateX(-' + offset + 'px)';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const autoScrollTestimonials = () => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide || slides.indexOf(nextSlide) >= slides.length - visibleSlides) {
            nextSlide = slides[0];
        }
        moveToSlide(track, currentSlide, nextSlide);
    };

    let autoScrollTimerTestimonials = setInterval(autoScrollTestimonials, autoScrollInterval);

    track.addEventListener('mouseover', function() {
        clearInterval(autoScrollTimerTestimonials);
    });

    track.addEventListener('mouseout', function() {
        autoScrollTimerTestimonials = setInterval(autoScrollTestimonials, autoScrollInterval);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoScrollTimerTestimonials);
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide || slides.indexOf(nextSlide) >= slides.length - visibleSlides) {
            nextSlide = slides[0];
        }
        moveToSlide(track, currentSlide, nextSlide);
        autoScrollTimerTestimonials = setInterval(autoScrollTestimonials, autoScrollInterval);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoScrollTimerTestimonials);
        const currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1];
        }
        moveToSlide(track, currentSlide, prevSlide);
        autoScrollTimerTestimonials = setInterval(autoScrollTestimonials, autoScrollInterval);
    });

    slides[0].classList.add('current-slide');


});



