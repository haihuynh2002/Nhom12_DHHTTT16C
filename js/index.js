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
const backToShop = $('.cart-return');
const cartContainer = $('.cart-container');
const addCart = $('.add-cart');
const cartItem = $('.moblie-menu').children[3];


items.forEach(function(item) {
    item.onclick = function(e) {
    modelBlock.classList.add('open');
    modelContent.classList.add('open-content');
    modelTitle.innerText = item.children[0].innerText;
    modelImg.src = item.children[1].currentSrc;
    }
})

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

menuBtn.onclick = function() {
    moblie.classList.add('active');
}

closeMenu.onclick = function() {
    moblie.classList.remove('active')
}

for(var i = 0; i < menuList.children.length; i++) {
    menuList.children[i].onclick = function() {
        moblie.classList.remove('active');
    }
}

cartBtn.onclick = function() {
    cartModel.classList.add('open');
    cartContainer.classList.add('open-content');
}

backToShop.onclick = function() {
    cartModel.classList.remove('open');
    cartContainer.classList.remove('open-content');
}

cartModel.onclick = function() {
    cartModel.classList.remove('open');
    cartContainer.classList.remove('open-content');
}

cartContainer.onclick = function(e) {
    e.stopPropagation();
}

buyNowBtn.onclick = function() {
    cartModel.classList.add('open');
    cartContainer.classList.add('open-content');

}

addCart.onclick = function() {
    modelBlock.classList.remove('open');
    modelContent.classList.remove('open-content');
    cartModel.classList.add('open');
    cartContainer.classList.add('open-content');
}

cartItem.onclick = function() {
    cartModel.classList.add('open');
    cartContainer.classList.add('open-content');
    moblie.classList.remove('active');
}