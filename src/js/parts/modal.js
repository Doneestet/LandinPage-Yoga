function modal() {
    let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    descriptionbtn = document.querySelector('.description-btn');

more.addEventListener("click", function() {
    overlay.style.display = "block";  // принимает блочную модель (делает видимым попап)
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden"; // запрещаем скролить пока открыт попап
});

close.addEventListener('click', function() {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = ""; // разрешаем скролить когда попап закрыт
});

descriptionbtn.addEventListener("click", function() {
    overlay.style.display = "block";  // принимает блочную модель
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden"; // запрещаем скролить пока открыт попап
});

close.addEventListener('click', function() {
    overlay.style.display = "none";
    descriptionbtn.classList.remove('more-splash');
    document.body.style.overflow = ""; // разрешаем скролить когда попап закрыт
});
}

module.exports = modal;