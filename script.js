const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementsByClassName('categories')[0]; // Select the first element with class 'categories'

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Use add to remove the class
    });
}
if (close && nav) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Use remove to remove the class
    });
}
