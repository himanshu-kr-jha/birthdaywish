document.querySelector('.birthday-card').addEventListener('click', function () {
    this.style.transform = 'rotateY(180deg)';
    document.querySelector('.inside').classList.remove('hidden');
});
