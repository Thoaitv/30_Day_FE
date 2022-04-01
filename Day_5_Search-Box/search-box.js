let btnSearch = document.querySelector('.search__box--btn');
let search__box = document.querySelector('.search__box')
function show() {
    search__box.classList.toggle('show');
    btnSearch.previousElementSibling.focus();
}
btnSearch.addEventListener('click', function () {
    // this.classList.toggle('show');
    // this.previousElementSibling.focus();

    // if (search__box.classList.contains('show')) {
    //     console.log("a")
    // } else {
    //     console.log("b")
    // }

    show();
});
