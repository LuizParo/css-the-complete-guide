var $backdrop = document.querySelector('.backdrop');
var $modal = document.querySelector('.modal');
var $selectPlanButtons = document.querySelectorAll('.plan button');

$selectPlanButtons.forEach(button =>
    button.addEventListener('click', () => {
        $modal.style.display = 'block';
        $backdrop.style.display = 'block';
    })
);