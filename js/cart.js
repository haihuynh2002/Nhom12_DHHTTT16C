
const addBtn = $('.pay')
const subTotal = $('.total__values p:first-child')
const ship = $('.total__values p:nth-child(2)')
const total = $('.total__values p:nth-child(3)')
const addCart = $('.add-cart');

addBtn.onclick = function() {
    const newItem = document.createElement('li');
    const mItem = $('.content__body').children;

    closeBtn.click();

    newItem.classList.add('cart-list__item')
    newItem.innerHTML = `<img src=${mItem[0].src} alt="">
    <h6>${mItem[1].children[0].innerText}</h6>
    <p>${mItem[1].children[2].innerText}</p>
    <i class="delete-icon ti-trash"></i>`;
    $('.cart-list').appendChild(newItem);

    calculateSubTotal()

}


$('.cart-list').onclick = function(e) {
   const deleteBtn =  e.target.closest('.delete-icon');
   if(deleteBtn) {
    $('.cart-list').removeChild(e.target.closest('.cart-list__item'))

    calculateSubTotal()
   }
}


addCart.onclick = function() {
    const newItem = document.createElement('li');
    const mItem = $('.content__body').children;

    closeBtn.click();

    newItem.classList.add('cart-list__item')
    newItem.innerHTML = `<img src=${mItem[0].src} alt="">
    <h6>${mItem[1].children[0].innerText}</h6>
    <p>${mItem[1].children[2].innerText}</p>
    <i class="delete-icon ti-trash"></i>`;
    $('.cart-list').appendChild(newItem);

    calculateSubTotal()

    
    cartModel.classList.add('open');
    cartContainer.classList.add('open-content');

}


function calculateSubTotal() {
    const prices = Array.from($('.cart-list').children).map(item => {
        return item.children[2].innerText;
    })

    const result = prices.reduce((sub, [unit, ...price]) => {
        return sub + parseFloat(price.join(''))
    }, 0) || 0;

    console.log(result)
    subTotal.innerText = `$${result}`;
    
    if($('.cart-list').children.length > 0) {
        ship.innerText = '$' + 20;
    } else {
        ship.innerText = '$' + 0;
    }

    const [unit, ...shipFee] = ship.innerText;
    const totalFee  = result + parseFloat(shipFee.join(''));

    console.log(totalFee)

    total.innerText = `$${totalFee}`;
    $('.total__btn span').innerText = `$${totalFee}`;
}

calculateSubTotal()
