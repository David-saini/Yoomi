function openNav() {
    document.getElementById("Menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

}
function closeNav() {
    document.getElementById("Menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}


$('.slider_1').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1.03,
    slidesToScroll: 1,
    Arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                Arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                Arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
    ]
});
$('.slider_2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    Arrows: true,
});


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


setTimeout(() => {
    const preloader = document.getElementById("preloader");

    preloader.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 3000);


AOS.init();




function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();