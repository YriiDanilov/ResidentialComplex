export const link_page_main  = document.querySelectorAll('.purchase_list');

const observerOptions = {
    root: null,
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

link_page_main.forEach(purchase => {
    observer.observe(purchase)
});