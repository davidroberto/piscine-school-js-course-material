const btn = document.querySelector('.js-btn');

btn.addEventListener('click', () => {
    const content = document.querySelector('.paid-content');

    // content.style.display = 'block';
    // btn.style.display = 'none';

    content.classList.remove('paid-content');
    btn.classList.add('d-n');
})