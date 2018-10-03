var $backdrop = document.querySelector('.backdrop');
var $modal = document.querySelector('.modal');
var $modalNoButton = document.querySelector('.modal__action--negative');

var $selectPlanButtons = document.querySelectorAll('.plan button');

$selectPlanButtons.forEach(button =>
    button.addEventListener('click', () => {
        $modal.style.display = 'block';
        $backdrop.style.display = 'block';
    })
);

$backdrop.addEventListener('click', closeModal);

$modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    $modal.style.display = 'none';
    $backdrop.style.display = 'none';
}