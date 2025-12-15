document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all necessary elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-list .project-card');

    // 2. Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the filter category from the data-filter attribute
            const filter = button.getAttribute('data-filter');

            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 3. Loop through all project cards and apply visibility
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Show all projects if 'all' is clicked, or if the card's category matches the filter
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Optional: Fade in effect (requires slight CSS addition)
                    card.style.opacity = '1'; 
                } else {
                    card.classList.add('hidden');
                    // Optional: Fade out effect
                    card.style.opacity = '0';
                }
            });
        });
    });
});