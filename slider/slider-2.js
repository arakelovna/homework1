const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemslist = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemslist);
const items = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (items.length-3)*step;
let currentRight = 0;

itemslist.style.right = currentRight;

right.addEventListener ("click", e=> {
    e.preventDefault();
    if (currentRight < maxRight ) {

        currentRight += step;
        itemslist.style.right = `${currentRight}px`;

    }

})

left.addEventListener ("click", e=> {
    e.preventDefault();
    if (currentRight > minRight ) {

        currentRight -= step;
        itemslist.style.right = `${currentRight}px`;

    }

})

