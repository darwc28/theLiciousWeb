let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});

$(document).ready(function () {
    const menuItems = [
        "Nims Chocojar (Strawberry)",
        "Cookies Heaven Cookies with Sauce",
        "Nuwa Dumpling With Sauce",
        "Grill Chicken Sandwich",
        "Bella Bakery Korean Garlic Cheese",
        "Macaron",
        "Dapor Cik Tauhu Vietnam Roll Crab",
        "Nims Chocojar (Original)",
        "Nasi Ayam Maktok",
        "Classic cookies chocolate chip",
        "Nims Chocojar (Rainbow)",
        "Nasi berempah ayam madu maktok",
        "Popcorn (GSC)",
        "Dlicious Kitchen Ramen Ayam Korea",
        "Dapor Cik Tauhu Tauhu Pegedil Daging"
    ];
    
    $('#search-box').autocomplete({
        source: menuItems,
        select: function (event, ui) {
            $('#search-box').val(ui.item.value);
            return false;
        }
    });
        
    menuItemElements.forEach(item => {
        const foodName = item.querySelector('h3').textContent.toLowerCase();
        const foodDescription = item.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (foodName.includes(query) || foodDescription.includes(query)) {
            if (!firstMatch) firstMatch = item;
        }
    });
        
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else {
        alert('No matching food item found in the menu!');
    }
                    
    $("#search-form").removeClass("active");
    $("#search-box").val('');
});

$("#search-form").on("submit", function (e) {
    e.preventDefault();
    const query = $("#search-box").val().toLowerCase();
    const menuItemElements = document.querySelectorAll('#menu .box-container .box');
    let firstMatch = null;

    menuItemElements.forEach(item => {
        const foodName = item.querySelector('h3').textContent.toLowerCase();
        const foodDescription = item.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (foodName.includes(query) || foodDescription.includes(query)) {
            if (!firstMatch) firstMatch = item; 
        }
    });
        
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else {
        alert('No matching food item found in the menu!');
    }
                
    $("#search-form").removeClass("active");
        
    $("#search-box").val('');
});

$("#close").on("click", function () {
    $("#search-form").removeClass("active");
});

$('#submit').on('click', function () {
    const searchQuery = $('#search-box').val();
    if (searchQuery) {
        alert(`Navigating to: ${searchQuery}`);
        window.location.href = `/${searchQuery.toLowerCase()}`;
    }
    else {
        alert('Please enter a search term');
    }
});
        
    