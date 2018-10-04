var $backdrop = document.querySelector('.backdrop');
var $modal = document.querySelector('.modal');
var $modalNoButton = document.querySelector('.modal__action--negative');
var $toggleButton = document.querySelector('.toggle-button');
var $mobileNav = document.querySelector('.mobile-nav');

var $selectPlanButtons = document.querySelectorAll('.plan button');

$selectPlanButtons.forEach(button =>
    button.addEventListener('click', () => {
        $modal.style.display = 'block';
        $backdrop.style.display = 'block';
    })
);

$backdrop.addEventListener('click', () => {
    $mobileNav.style.display = 'none';
    closeModal();
});

$modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    $modal.style.display = 'none';
    $backdrop.style.display = 'none';
}

$toggleButton.addEventListener('click', () => {
    $mobileNav.style.display = 'block';
    $backdrop.style.display = 'block';
});