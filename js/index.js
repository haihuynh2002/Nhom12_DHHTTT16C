const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const closeBtn = $('#footer__close');
const modelBlock = $('.model');
const modelContent = $('.model__content');
const buyNowBtn = $('.first__button');
const readMoreBtn = $('.second__button');
const items = $$('.item');
const modelImg = $('.body__img');
const modelTitle = $('.text__title');
const modelDesc = $('.text__desc');
const menuItems = $$('.header__menu-item');
const cartBtn = $('.cart');
const cartModel = $('.cart-model');
const menuBtn = $('.menu-icon');
const moblie = $('.moblie');
const closeMenu = $('.menu-close');
const menuList = $('.moblie-menu');


items.forEach(function(item) {
    item.onclick = function(e) {
    modelBlock.classList.add('open');
    modelContent.classList.add('open-content');
    modelTitle.innerText = item.children[0].innerText;
    modelImg.src = item.children[1].currentSrc;
    }
})

buyNowBtn.onclick = function() {
    modelBlock.classList.add('open');
    modelContent.classList.add('open-content');

}

readMoreBtn.onclick = function() {
    modelBlock.classList.add('open');
    modelContent.classList.add('open-content');

}

closeBtn.onclick = function() {
    modelBlock.classList.remove('open');
    modelContent.classList.remove('open-content');
}

modelBlock.onclick = function() {
    modelBlock.classList.remove('open');
    modelContent.classList.remove('open-content');
}

modelContent.onclick = function(e) {
    e.stopPropagation();
}

cartBtn.onclick = function() {
    console.log(1)
    cartModel.classList.add('open');
    modelContent.classList.add('open-content');
}

menuBtn.onclick = function() {
    moblie.classList.add('active');
}

closeMenu.onclick = function() {
    moblie.classList.remove('active')
}

console.log(menuList)

for(var i = 0; i < menuList.children.length; i++) {
    menuList.children[i].onclick = function() {
        console.log(1)
        moblie.classList.remove('active');
    }
}