const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetSection = btn.getAttribute('data-target'); // Get the target section (from data-target)

        // Remove 'active' class from all buttons and sections
        resumeBtns.forEach(button => {
            button.classList.remove('active');
        });
        document.querySelectorAll('.resume-detail').forEach(detail => {
            detail.classList.remove('active');
        });

        // Add 'active' class to the clicked button and the corresponding section
        btn.classList.add('active');
        document.querySelector(`.resume-detail.${targetSection}`).classList.add('active');
    });
});
