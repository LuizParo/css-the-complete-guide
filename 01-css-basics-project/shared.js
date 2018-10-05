var $backdrop = document.querySelector('.backdrop');
var $modal = document.querySelector('.modal');
var $modalNoButton = document.querySelector('.modal__action--negative');
var $toggleButton = document.querySelector('.toggle-button');
var $mobileNav = document.querySelector('.mobile-nav');

var $selectPlanButtons = document.querySelectorAll('.plan button');

$selectPlanButtons.forEach(button =>
    button.addEventListener('click', () => {
        $modal.classList.add('open');
        $backdrop.classList.add('open');
    })
);

$backdrop.addEventListener('click', () => {
    $mobileNav.classList.remove('open');
    closeModal();
});

$modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    $modal.classList.remove('open');
    $backdrop.classList.remove('open');
}

$toggleButton.addEventListener('click', () => {
    $mobileNav.classList.add('open');
    $backdrop.classList.add('open');
});