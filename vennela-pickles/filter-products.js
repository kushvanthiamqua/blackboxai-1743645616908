// Product filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing product filters...');

    const productCards = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function filterProducts(category) {
        productCards.forEach(card => {
            const showCard = category === 'all' || card.dataset.category === category;
            card.style.display = showCard ? 'block' : 'none';
            if(showCard) {
                card.style.animation = 'fadeIn 0.5s ease-out forwards';
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-yellow-300', 'text-black');
                btn.classList.add('border', 'border-yellow-300');
            });
            button.classList.add('bg-yellow-300', 'text-black');
            button.classList.remove('border');
            filterProducts(button.dataset.category);
        });
    });

    filterProducts('all');
});