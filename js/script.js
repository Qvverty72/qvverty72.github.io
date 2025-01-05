document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
            const percentSpan = bar.querySelector('.percent');
            percentSpan.textContent = percent + '%';
        });
    }

    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skills-container').forEach(container => {
        observer.observe(container);
    });

    // Animate progress bars immediately if they're already in view
    animateProgressBars();
});

