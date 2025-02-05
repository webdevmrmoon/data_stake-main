// sliders
$(function () {
    $('.bannerCaraousel').owlCarousel({
        loop: true,
        margin: 1,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        autoplay: true,
        smartSpeed: 3000,
        // mouseDrag: false,
        touchDrag: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // :: Animation OWL Header
    $('.bannerCarousel').on('translate.owl.carousel', function () {
        $('.bannerMainContent h5')
            .removeClass('animated animate__fadeInDown')
            .css({
                'opacity': '0',
                'transition': 'opacity 0.3s ease-in-out'
            });

        $('.bannerMainContent')
            .removeClass('animated animate__fadeIn')
            .css({
                'opacity': '0',
                'transition': 'opacity 0.3s ease-in-out'
            });


        $('.bannerMainImg img').removeClass('active')
    });

    $('.bannerCarousel').on('translated.owl.carousel', function () {
        $('.bannerMainContent h5')
            .addClass('animated animate__fadeInDown')
            .css({
                'opacity': '1',
                'transition': 'opacity 0.3s ease-in-out'
            });

        $('.bannerMainContent')
            .addClass('animated animate__fadeIn')
            .css({
                'opacity': '1',
                'transition': 'opacity 0.3s ease-in-out'
            });

        $('.bannerMainImg img').addClass('active')

    });

})


$(function () {
    $('.industrySlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        // slideTransition: 'linear',
        autoplayTimeout: 7000,
        autoplaySpeed: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

$(function () {
    $('.testimonialsCarousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: true,
        autoplay: false,
        // slideTransition: 'linear',
        autoplayTimeout: 7000,
        autoplaySpeed: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
})

$(function () {
    $('.tagsSlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        // slideTransition: 'linear',
        autoplayTimeout: 4000,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        autoplaySpeed: 2000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})

$(function () {
    $('.clientCarousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 4000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
})


// Menu Scrolling

$(function () {
    function initializeMenuToggle() {
        $(".hamburger").off('click').on('click', function () {
            if ($(window).width() < 1000) {
                $(".headerNav").slideToggle();
                $(this).toggleClass('active');
            }
        });

        $(".hasSub").off('click').on('click', function () {
            if ($(window).width() < 1000) {
                $(this).closest('li.hasSub').find(".headerSubNav").slideToggle();
                $(this).toggleClass('active');
            }
        });
    }

    $(document).ready(initializeMenuToggle);
    $(window).resize(initializeMenuToggle);
});
$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
});


$(function () {

    // Top Button
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
})




// Read More... Read Less
$(document).ready(function () {
    $(".prparaReadBtn").click(function () {
        var index = $(".prparaReadBtn").index(this);
        var morePara = $(".prlistMorePara").eq(index);
        morePara.slideToggle();
        $(this).text($(this).text() === 'Expand [+]' ? 'Less [-]' : 'Expand [+]');
    });
});



// FAQS
$(function () {
    let question = document.querySelectorAll(".question");

    question.forEach(question => {
        question.addEventListener("click", event => {
            const active = document.querySelector(".question.active");
            if (active && active !== question) {
                active.classList.toggle("active");
                active.nextElementSibling.style.maxHeight = 0;
            }
            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            if (question.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        })
    })

})



$(function () {
    const canvases = document.querySelectorAll(".canvastwo");
    const canvasCount = canvases.length;

    for (let i = 0; i < canvasCount; i++) {
        const canvas = canvases[i];
        const ctx = canvas.getContext("2d");
        const branding = `rgba(255, 217, 194, 1), ${Math.random() * 0.3 + 0.3})`;
        const particles = [];
        const particleCount = 20;

        let w = (canvas.width = innerWidth);
        let h = (canvas.height = innerHeight);

        function resize() {
            w = canvas.width = innerWidth;
            h = canvas.height = innerHeight;
        }

        window.addEventListener("resize", resize);

        class Particle {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = branding;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > w || this.x < 0) this.speedX *= -1;
                if (this.y > h || this.y < 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let j = 0; j < particleCount; j++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        init();
        animate();
    }
})





// moving Image
$(function () {
    $('.bannerImg').mousemove(function (e) {
        var moveinX = (e.pageX * -2 / 100);
        var moveinY = (e.pageY * -2 / 100);
        $(this).css('transform', `translate(${moveinX}px, ${moveinY}px)`);
    });

    $('.sectionscroll').mousemove(function (e) {
        // Get the position of the parent element
        var offset = $(this).offset();

        // Calculate mouse position relative to the parent
        var relativeX = e.pageX - offset.left;
        var relativeY = e.pageY - offset.top;

        // Calculate movement for the child element
        var moveinX = (relativeX * -2 / 100);
        var moveinY = (relativeY * -2 / 100);

        // Apply the transformation to the target element
        $('.aboutImg1').css('transform', `translate(${moveinX}px, ${moveinY}px)`);
        // $('.bnrshapeone').css('transform', `translate(${moveinX}px, ${moveinY}px)`);
        $('.bnrshapetwo').css('transform', `translate(${moveinX}px, ${moveinY}px)`);
        $('.bnrshapethree').css('transform', `translate(${moveinX}px, ${moveinY}px)`);
        $('.bnrshapefour').css('transform', `translate(${moveinX}px, ${moveinY}px)`);
        $('.bnrshapefive').css('transform', `translate(${moveinX}px, ${moveinY}px)`);
    });

})


// counter
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const animationDuration = 800; // Animation duration in milliseconds
    const interval = 10; // Update interval in milliseconds

    counters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute("data-target"), 10);
        let currentValue = 0;
        const step = targetValue / (animationDuration / interval);

        const updateCounter = setInterval(() => {
            currentValue += step;
            if (currentValue >= targetValue) {
                currentValue = targetValue; // Ensure it doesn't exceed target
                clearInterval(updateCounter);
            }
            counter.textContent = `${Math.round(currentValue)}%`;
        }, interval);
    });
});



// go to top with side bar nav
$(function () {
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.otItemListCard').each(function (i) {

                if ($(this).position().top <= windscroll + 140) {
                    $('.otSidebar .sidebar-button.active').removeClass('active');
                    $('.otSidebar .sidebar-button').eq(i).addClass('active');
                }
            });

        } else {

            $('.otSidebar .sidebar-button.active').removeClass('active');
            $('.otSidebar .sidebar-button:first').addClass('active');
        }

    }).scroll();
    $('.sidebar-button').click(function () {
        var target = $(this).data('target'); // Get the target section ID from data attribute
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80 // Scroll to the top of the target section with an offset of 100px
        }, 300); // Adjust the duration of the animation as needed
    });

})


// Menu Scrolling

$(document).ready(function () {
    var lastScrollTop = 0;

    function handleScroll() {
        if ($(window).width() >= 768) { // Check if the viewport width is greater than or equal to 768px
            var st = $(this).scrollTop();
            if (st > lastScrollTop && st >= 100) {
                // downscroll code
                $('.headerSection').addClass('scroll-down').removeClass('scroll-up');
            } else {
                // upscroll code
                $('.headerSection').addClass('scroll-up').removeClass('scroll-down');
            }

            if (Math.abs($('.headerSection').offset().top) <= 1) {
                $('.headerSection').removeClass('scroll-down scroll-up');
            }

            lastScrollTop = st;
        } else {
            // Remove sticky behavior and classes in responsive view
            $('.headerSection').removeClass('scroll-down scroll-up');
        }
    }

    $(window).scroll(handleScroll);

    // Reapply logic when resizing window
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.headerSection').removeClass('scroll-down scroll-up');
        }
    });
});


// Scroll Top Button
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector(".scrollToTop");
    const rootElement = document.documentElement;
    const bodyElement = document.body;
    const progressBar = document.getElementById("progress-bar");
    const pathLength = document
        .querySelector("#progress-bar > svg > path")
        .getTotalLength();

    scrollToTopBtn.addEventListener("click", () => {
        rootElement.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("scroll", () => {
        const scrollAmount = pathLength / 100;
        const scrollPosition = Math.round(
            ((rootElement.scrollTop || bodyElement.scrollTop) /
                ((rootElement.scrollHeight || bodyElement.scrollHeight) -
                    innerHeight)) *
            100 *
            scrollAmount
        );

        if (scrollPosition > 5) {
            scrollToTopBtn.classList.add("showBtn");
            progressBar.style.setProperty("--scrollAmount", scrollPosition + "px");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
});



// Vision Mission Tabbing

$(function(){
    var section = $('div.table__cell');

function toggleAccordion() {
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);
})



// image change in responsive
// $(document).ready(function() {
//     function checkWidth() {
//         if ($(window).width() <= 768) {
//             $('.bannerBg img').attr('src', 'assets/img/bg/service-mob-img1.png');
//         } else {
//             $('.bannerBg img').attr('src', 'assets/img/bg/services-bg1.png');
//         }
//     }

//     checkWidth(); 

//     $(window).resize(function() {
//         checkWidth(); 
//     });
// });


// Pagination CSS
window.onload = function () {
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
  
    $('.cdp_i').on('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      var go = $(this).attr('href').replace('#!', '');
  
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      } else {
        paginationPage = parseInt(go, 10);
      }
  
      // Ensure pagination stays within valid bounds
      if (paginationPage < 1) {
        paginationPage = 1;
      } else if (paginationPage > 19) { // Adjust to the max number of pages
        paginationPage = 19;
      }
  
      $('.cdp').attr('actpage', paginationPage);
  
      // Update the visual state of pagination
      $('.cdp_i').removeClass('active'); // Remove active class from all
      $(`.cdp_i[href='#!${paginationPage}']`).addClass('active'); // Add active class to current page
    });
  };

//   #blog share btn

$(function () {
    $('.blogsharebtn').click(function () {
        $('.loveArticleSocial').slideToggle(400);
    });

    $('.lovearticlsocialCloser').click(function () {
        $('.loveArticleSocial').slideUp(400);
    });
});

document.querySelectorAll('.btnHover').forEach(link => {
    const textSpan = link.querySelector('.btnChangeText');
    const originalText = textSpan.textContent;

    link.addEventListener('mouseenter', () => {
        const hoverText = textSpan.getAttribute('data-hover-text');
        textSpan.textContent = hoverText;
    });

    link.addEventListener('mouseleave', () => {
        textSpan.textContent = originalText;
    });
});


$(document).ready(function () {
    $(".panel").hide(); // Hide all panels initially
    $("#panel1").show(); // Show the first panel by default

    $(".tab").click(function () {
        $(".tab").removeClass("active"); // Remove 'active' from all tabs
        $(this).addClass("active"); // Add 'active' to clicked tab

        let targetPanel = "#" + $(this).data("target");

        // Check if the clicked panel is already visible
        if (!$(targetPanel).is(":visible")) {
            $(".panel:visible").fadeOut(300, function () { // Fade out current panel
                $(targetPanel).fadeIn(300); // Fade in new panel
            });
        }
    });
});


$(document).ready(function () {
    let tabs = $(".tabtwo");
    let panels = $(".paneltwo");
    let currentIndex = 0;

    panels.hide(); // Hide all panels initially
    $(tabs[0]).addClass("active"); // Set first tab as active
    $(panels[0]).show(); // Show the first panel by default

    // Click event for manual switching
    $(".tab").click(function () {
        clearInterval(autoSwitch); // Stop auto-switching when user clicks
        switchTab($(this).index());
    });

    // Function to switch tabs & panels
    function switchTab(index) {
        tabs.removeClass("active"); // Remove active class from all tabs
        panels.stop(true, true).fadeOut(300); // Stop ongoing animations & fade out panels

        $(tabs[index]).addClass("active"); // Add active class to selected tab
        $(panels[index])
            .delay(300)
            .fadeIn(300)
            .css("display", "none") // Ensure no flickering
            .slideDown(400); // Slide down smoothly

        currentIndex = index; // Update current index
    }

    // Auto-switch function every 2 seconds
    let autoSwitch = setInterval(function () {
        currentIndex = (currentIndex + 1) % tabs.length; // Loop back to first after last tab
        switchTab(currentIndex);
    }, 2000);
});