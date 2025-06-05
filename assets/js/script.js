const shareBtn = document.getElementById('shareBtn');
const shareModal = document.getElementById('shareModal');
const closeModal = document.getElementById('closeModal');

shareBtn.addEventListener('click', () => {
    shareModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    shareModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.style.display = 'none';
    }
});

function copyLink() {
    const url = 'https://mylinks-eleodev.vercel.app';
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado!');
    });
}
