const stages = document.querySelectorAll('.stage');

function toggleDetails(index) {
    const details = stages[index].querySelector('.details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}
