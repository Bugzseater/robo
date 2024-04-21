ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay:400
});

ScrollReveal().reveal('.image', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.title', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.titleab', { delay: 500 });
ScrollReveal().reveal('.img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.dis', { delay: 500, origin: 'right' });
ScrollReveal().reveal('footer', { delay: 500, origin: 'bottom' });

