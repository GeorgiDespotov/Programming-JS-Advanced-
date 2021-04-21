function toggle() {
    let button = document.querySelector('.button');
    let moreText = document.querySelector('#extra');

    moreText.style.display = moreText.style.display === 'block' ? 'none' : 'block';
    button.textContent = button.textContent === 'Less' ? 'More' : 'Less';
}