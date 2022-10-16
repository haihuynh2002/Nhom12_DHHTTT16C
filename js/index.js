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
