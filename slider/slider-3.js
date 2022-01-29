const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();
    if (direction == "right") {
        itemsList.appendChild(itemsList.firstElementChild);
    } else {
        itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
    }

}

rightBtn.addEventListener("click", e => {
   
    loop ("right", e);
});

leftBtn.addEventListener("click", e => {
    e.preventDefault();
    loop ("left", e);

});